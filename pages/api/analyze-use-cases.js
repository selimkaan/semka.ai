import { getAllAIs, getUseCasesArray } from '../../lib/firebase-data';

// Category mapping based on category_id (using the corrected mapping from your firebase-data.ts)
const categoryMapping = {
  1: 'agentlar',
  2: 'altyapi', // Note: This is swapped in your current implementation
  3: 'otomasyon', // Note: This is swapped in your current implementation  
  4: 'verimlilik',
  5: 'veri',
  6: 'sosyal-medya',
  7: 'ses',
  9: 'yazilim-araclari',
  10: 'sohbet-botu',
  11: 'tasarim',
  12: 'akademi',
  13: 'fotograf-video',
  14: 'kurumsal'
};

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    console.log('🔍 Fetching all tools from Firebase...');
    
    // Fetch all tools using the existing function
    const allTools = await getAllAIs();
    
    if (!allTools || allTools.length === 0) {
      console.log('❌ No tools found in Firebase');
      return res.status(404).json({ message: 'No tools found in Firebase' });
    }
    
    console.log(`📊 Found ${allTools.length} tools`);
    
    // Initialize category use cases object
    const categoryUseCases = {};
    
    // Process each tool
    allTools.forEach((tool) => {
      const toolName = tool.name || 'Unknown Tool';
      const categoryId = tool.category_id;
      const categorySlug = categoryMapping[categoryId] || 'unknown';
      
      // Initialize category if not exists
      if (!categoryUseCases[categorySlug]) {
        categoryUseCases[categorySlug] = {
          categoryId: categoryId,
          categoryName: categorySlug,
          tools: [],
          allUseCases: [],
          uniqueUseCases: new Set()
        };
      }
      
      // Extract use cases for this tool using the helper function
      const toolUseCases = getUseCasesArray(tool);
      
      // Add use cases to category
      toolUseCases.forEach(useCase => {
        categoryUseCases[categorySlug].allUseCases.push(useCase);
        categoryUseCases[categorySlug].uniqueUseCases.add(useCase);
      });
      
      // Add tool info to category
      categoryUseCases[categorySlug].tools.push({
        name: toolName,
        id: tool.id,
        slug: tool.slug || toolName.toLowerCase().replace(/\s+/g, '-'),
        useCases: toolUseCases,
        useCaseCount: toolUseCases.length
      });
      
      console.log(`📝 ${toolName} (${categorySlug}): ${toolUseCases.length} use cases`);
    });
    
    // Convert Sets to Arrays and add statistics
    const finalResult = {};
    Object.keys(categoryUseCases).forEach(categorySlug => {
      const category = categoryUseCases[categorySlug];
      finalResult[categorySlug] = {
        categoryId: category.categoryId,
        categoryName: category.categoryName,
        statistics: {
          totalTools: category.tools.length,
          totalUseCases: category.allUseCases.length,
          uniqueUseCases: category.uniqueUseCases.size,
          averageUseCasesPerTool: category.tools.length > 0 ? (category.allUseCases.length / category.tools.length).toFixed(2) : '0.00'
        },
        uniqueUseCasesList: Array.from(category.uniqueUseCases).sort(),
        tools: category.tools.sort((a, b) => b.useCaseCount - a.useCaseCount) // Sort by use case count
      };
    });
    
    console.log('\n📋 SUMMARY:');
    Object.keys(finalResult).forEach(categorySlug => {
      const stats = finalResult[categorySlug].statistics;
      console.log(`${categorySlug.toUpperCase()}: ${stats.totalTools} tools, ${stats.uniqueUseCases} unique use cases`);
    });
    
    // Return the analysis results
    res.status(200).json({
      success: true,
      totalTools: allTools.length,
      categoriesAnalyzed: Object.keys(finalResult).length,
      data: finalResult
    });
    
  } catch (error) {
    console.error('❌ Error analyzing use cases:', error);
    res.status(500).json({ 
      success: false, 
      error: error.message,
      message: 'Error analyzing use cases' 
    });
  }
}
