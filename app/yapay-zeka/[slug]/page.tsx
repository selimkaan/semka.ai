'use client'

import Link from 'next/link'
import { CheckCircle, Share2, Twitter, Linkedin } from 'lucide-react'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { getAIProductBySlug, getAllAIs, AIProduct } from '@/lib/firebase-data'

export default function AIDetailPage() {
  const params = useParams()
  const [agent, setAgent] = useState<AIProduct | null>(null)
  const [loading, setLoading] = useState(true)
  const [relatedTools, setRelatedTools] = useState<AIProduct[]>([])

  useEffect(() => {
    const fetchAgent = async () => {
      if (params.slug) {
        console.log('Fetching agent with slug:', params.slug);
        try {
          const agentData = await getAIProductBySlug(params.slug as string)
          console.log('Agent data received:', agentData);
          console.log('Pricing data:', {
            sales_action: agentData?.sales_action,
            has_free_plan: agentData?.has_free_plan,
            prices: agentData?.prices,
            price: agentData?.price
          });
          console.log('Full prices object:', JSON.stringify(agentData?.prices, null, 2));
          console.log('Sales action type:', typeof agentData?.sales_action);
          console.log('Sales action value:', agentData?.sales_action);
          setAgent(agentData)
          
          // Fetch related tools from the same category using category_id
          if (agentData && agentData.category_id) {
            console.log('Current tool category_id:', agentData.category_id);
            console.log('Current tool categories array:', agentData.categories);
            console.log('Fetching all tools and filtering by category_id:', agentData.category_id);
            
            // Get all tools and filter by category_id to avoid Firebase index issues
            const allTools = await getAllAIs()
            console.log('Total tools fetched:', allTools.length);
            
            const categoryTools = allTools.filter(tool => tool.category_id === agentData.category_id)
            console.log('All tools in category before filtering:', categoryTools.length);
            console.log('All tools in category:', categoryTools.map(t => ({ name: t.name, slug: t.slug, category_id: t.category_id })));
            
            // Filter out the current tool and limit to 4 tools
            const filteredTools = categoryTools
              .filter(tool => tool.slug !== agentData.slug)
              .slice(0, 4)
            setRelatedTools(filteredTools)
            console.log('Related tools after filtering:', filteredTools.length);
            console.log('Filtered tools:', filteredTools.map(t => ({ name: t.name, slug: t.slug })));
          } else {
            console.log('No category_id found for current agent:', agentData);
            console.log('Available fields:', Object.keys(agentData || {}));
          }
        } catch (error) {
          console.error('Error fetching agent:', error)
        } finally {
          setLoading(false)
        }
      }
    }

    fetchAgent()
  }, [params.slug])

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    )
  }

  if (!agent) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-xl">AI tool not found</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative">
        {/* Background Image with 40px gap from screen edges */}
        <div className="mx-10 h-[260px] bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 relative overflow-hidden rounded-t-lg">
          {/* Banner Image */}
          {agent.banner_url ? (
            <img 
              src={agent.banner_url} 
              alt={`${agent.name} banner`}
              className="w-full h-full object-cover"
            />
          ) : (
            <>
              {/* Abstract grid pattern overlay */}
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAgMEg2MFY2MEgwVjBaIiBmaWxsPSIjMDAwMDAwIiBmaWxsLW9wYWNpdHk9IjAuMSIvPgo8cGF0aCBkPSJNMCAwSDYwVjBIMFYwWiIgZmlsbD0iIzAwMDAwMCIgZmlsbC1vcGFjaXR5PSIwLjEiLz4KPHBhdGggZD0iTTAgMEg2MFY2MEgwVjBaIiBmaWxsPSIjMDAwMDAwIiBmaWxsLW9wYWNpdHk9IjAuMSIvPgo8cGF0aCBkPSJNMCAwSDYwVjBIMFYwWiIgZmlsbD0iIzAwMDAwMCIgZmlsbC1vcGFjaXR5PSIwLjEiLz4KPC9zdmc+')] opacity-20"></div>
              
              {/* Glowing circular element on right */}
              <div className="absolute right-8 top-8 w-24 h-24 bg-blue-400 rounded-full opacity-60 blur-sm"></div>
            </>
          )}
        </div>
        
        {/* AI Logo - positioned exactly as per Figma coordinates */}
        <div className="absolute left-[70px] top-[210px] w-[100px] h-[100px] rounded-xl flex items-center justify-center overflow-hidden">
          {agent.logo_url ? (
            <img 
              src={agent.logo_url} 
              alt={`${agent.name} logo`}
              className="w-full h-full rounded-xl object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gray-200 rounded-xl flex items-center justify-center">
              <span className="text-gray-500 text-2xl font-bold">{agent.name.charAt(0)}</span>
            </div>
          )}
        </div>
        
        {/* AI Name - positioned exactly as per Figma coordinates */}
        <h1 className="absolute left-[73.89px] top-[349px] w-[200px] h-[36px] text-[30px] font-bold text-black leading-[36px] whitespace-nowrap">
          {agent.name}
        </h1>
        
        {/* AI Description - positioned exactly as per Figma coordinates */}
        <p className="absolute left-[73.89px] top-[393px] w-[544px] h-[19px] text-base font-medium text-black leading-[19px] tracking-[0.01em] whitespace-nowrap">
          {agent.description_tr || agent.overview_tr || 'AI tool description'}
        </p>
        
        {/* Action Buttons - positioned exactly as per Figma coordinates */}
        <div className="absolute left-[73.2px] top-[432px] w-[277px] h-[27px] flex items-center gap-3">
          <a 
            href={agent.website_url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-[#00A070] text-white px-4 py-2 rounded-md text-xs font-semibold hover:bg-[#008f63] transition-colors whitespace-nowrap"
          >
            Siteye Git
          </a>
          {agent.categories.slice(0, 2).map((category) => (
            <button key={category} className="bg-white text-[#6A6C72] border border-[rgba(199,202,208,0.6)] px-4 py-2 rounded-md text-xs font-semibold hover:bg-gray-50 transition-colors whitespace-nowrap">
              {category}
            </button>
          ))}
        </div>
        
        {/* Social Icons - positioned on same line as action buttons, ending at banner's right edge */}
        <div className="absolute right-[40px] top-[432px] w-[80px] h-[16px] flex items-center gap-4 justify-end">
          <button className="w-8 h-8 flex items-center justify-center text-[#343330] hover:text-gray-600 transition-colors">
            <Share2 className="w-5 h-5" />
          </button>
          <button className="w-8 h-8 flex items-center justify-center text-[#343330] hover:text-gray-600 transition-colors">
            <Twitter className="w-5 h-5" />
          </button>
          <button className="w-8 h-8 flex items-center justify-center text-[#343330] hover:text-gray-600 transition-colors">
            <Linkedin className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-10 py-16 mt-[214px]">
        {/* About AI Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-black mb-6">
            Yapay Zeka Hakkında
          </h2>
          <p className="text-sm text-black leading-relaxed max-w-[1170px]">
            {agent.overview_tr || agent.description_tr || 'Detailed description about this AI tool.'}
          </p>
        </div>

        {/* Pricing Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-black mb-6">
            Fiyatlar
          </h2>
          
          <div className="flex gap-[85px]">
            {/* Check if sales_action is "price" */}
            {agent.sales_action === 'price' ? (
              <>
                {/* Free Plan */}
                {agent.has_free_plan && (
                  <div className="w-[206px] h-[49px] bg-white border-2 border-[rgba(199,202,208,0.6)] rounded-md flex items-center justify-center p-1">
                    <span className="text-lg font-semibold text-[#6A6C72]">
                      <span className="text-black font-bold">$0</span> / ay
                    </span>
                  </div>
                )}
                
                {/* Pro Plan - only show if price is valid */}
                {agent.prices?.pro !== undefined && agent.prices?.pro !== null && String(agent.prices.pro) !== '-' && (
                  <div className="w-[206px] h-[49px] bg-white border-2 border-[rgba(199,202,208,0.6)] rounded-md flex items-center justify-center p-1">
                    <span className="text-lg font-semibold text-[#6A6C72]">
                      <span className="text-black font-bold">${agent.prices.pro}</span> / ay
                    </span>
                  </div>
                )}
                
                {/* Team Plan - only show if price is valid */}
                {agent.prices?.team !== undefined && agent.prices?.team !== null && String(agent.prices.team) !== '-' && (
                  <div className="w-[206px] h-[49px] bg-white border-2 border-[rgba(199,202,208,0.6)] rounded-md flex items-center justify-center p-1">
                    <span className="text-lg font-semibold text-[#6A6C72]">
                      <span className="text-black font-bold">${agent.prices.team}</span> / ay
                    </span>
                  </div>
                )}
                
                {/* Business Plan - only show if price is valid */}
                {agent.prices?.business !== undefined && agent.prices?.business !== null && String(agent.prices.business) !== '-' && (
                  <div className="w-[206px] h-[49px] bg-white border-2 border-[rgba(199,202,208,0.6)] rounded-md flex items-center justify-center p-1">
                    <span className="text-lg font-semibold text-[#6A6C72]">
                      <span className="text-black font-bold">${agent.prices.business}</span> / ay
                    </span>
                  </div>
                )}
                
                {/* Organization Plan - only show if price is valid */}
                {agent.prices?.organization !== undefined && agent.prices?.organization !== null && String(agent.prices.organization) !== '-' && (
                  <div className="w-[206px] h-[49px] bg-white border-2 border-[rgba(199,202,208,0.6)] rounded-md flex items-center justify-center p-1">
                    <span className="text-lg font-semibold text-[#6A6C72]">
                      <span className="text-black font-bold">${agent.prices.organization}</span> / ay
                    </span>
                  </div>
                )}
                
                {/* Plus Plan - only show if price is valid */}
                {agent.prices?.plus !== undefined && agent.prices?.plus !== null && String(agent.prices.plus) !== '-' && agent.prices.plus !== 0 && (
                  <div className="w-[206px] h-[49px] bg-white border-2 border-[rgba(199,202,208,0.6)] rounded-md flex items-center justify-center p-1">
                    <span className="text-lg font-semibold text-[#6A6C72]">
                      <span className="text-black font-bold">${agent.prices.plus}</span> / ay
                    </span>
                  </div>
                )}
                
                {/* Plus Plan with 0 value - special case */}
                {agent.prices?.plus === 0 && (
                  <div className="w-[206px] h-[49px] bg-white border-2 border-[rgba(199,202,208,0.6)] rounded-md flex items-center justify-center p-1">
                    <span className="text-lg font-semibold text-[#6A6C72]">
                      <span className="text-black font-bold">$0</span> / ay
                    </span>
                  </div>
                )}

              </>
            ) : (
              /* If sales_action is not "price", show the sales_action value */
              <div className="w-[206px] h-[49px] bg-white border-2 border-[rgba(199,202,208,0.6)] rounded-md flex items-center justify-center p-1">
                <span className="text-lg font-semibold text-[#6A6C72]">
                  <span className="text-black font-bold">{agent.sales_action || 'Fiyat bilgisi yok'}</span>
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-0">
          <h2 className="text-2xl font-semibold text-black mb-6">
            Özellikler ve Kullanım Senaryoları
          </h2>
          

          
          <div className="flex flex-col gap-5 max-w-[1162px]">
            {[agent.features1, agent.features2, agent.features3, agent.features4, agent.features5, agent.features6, agent.features7, agent.features8, agent.features9, agent.features10]
              .filter(feature => feature && feature.trim() !== '')
              .map((feature, index) => (
                <div key={index} className="flex items-end gap-[9px]">
                  <CheckCircle className="w-4 h-4 text-[#65D46A] flex-shrink-0" />
                  <span className="text-sm text-black">{feature}</span>
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* Separator Line */}
      <div className="container mx-auto px-10">
        <div className="w-full h-px bg-[rgba(199,202,208,0.6)] mb-10"></div>
      </div>

      {/* Related AI Section */}
      <div className="container mx-auto px-10 mb-16">
        <h2 className="text-2xl font-semibold text-black mb-8">
          Bu yapay zekaları da beğenebilirsin
        </h2>
        <div className="flex gap-6 overflow-x-auto pb-4">
          {relatedTools.length > 0 ? (
            relatedTools.map((tool) => (
              <Link 
                key={tool.id} 
                href={`/yapay-zeka/${tool.slug}`}
                className="border border-[#E5E7EB] rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] hover:shadow-lg transition-shadow w-[385px] h-[277px] flex-shrink-0"
              >
                <div className="p-0 h-full flex flex-col">
                  {/* Top Section - Background with banner or gradient */}
                  <div className="w-[385px] h-[192.24px] rounded-t-[10px] relative overflow-hidden">
                    {tool.banner_url ? (
                      <img 
                        src={tool.banner_url} 
                        alt={`${tool.name} banner`}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <>
                        {/* Gradient background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-blue-50 to-indigo-100" />
                        
                        {/* Decorative elements */}
                        <div className="absolute w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 via-purple-500 to-indigo-600 opacity-60 blur-sm top-4 left-4" />
                        <div className="absolute w-12 h-8 bg-gradient-to-br from-purple-400 to-blue-500 opacity-40 rounded-lg transform bottom-4 right-4 rotate-12" />
                        <div className="absolute top-8 right-8 w-2 h-2 bg-gray-600 rounded-full opacity-60" />
                        <div className="absolute top-16 right-16 w-1.5 h-1.5 bg-gray-600 rounded-full opacity-40" />
                        <div className="absolute top-20 right-6 w-1 h-1 bg-gray-600 rounded-full opacity-50" />
                      </>
                    )}
                  </div>

                  {/* Bottom Section - Tool info */}
                  <div className="w-[385px] h-[103px] bg-white rounded-b-[10px] flex flex-row justify-center items-start px-[12px] pt-[12px] pb-[20px] gap-[12px]">
                    {/* Logo */}
                    <div className="w-[45px] h-[45px] rounded-[8px] flex items-center justify-center flex-shrink-0 overflow-hidden">
                      {tool.logo_url ? (
                        <img 
                          src={tool.logo_url} 
                          alt={`${tool.name} logo`}
                          className="w-full h-full object-cover rounded-[8px]"
                        />
                      ) : (
                        <div className="w-full h-full bg-gray-200 rounded-[8px] flex items-center justify-center">
                          <span className="text-gray-500 text-lg font-bold">{tool.name.charAt(0)}</span>
                        </div>
                      )}
                    </div>
                    
                    {/* Tool Details */}
                    <div className="flex-1 min-w-0 flex flex-col items-start p-0">
                      {/* Title */}
                      <div className="w-full font-['Inter'] font-semibold text-base leading-[19px] text-[#000000] mb-1 flex items-center">
                        <span className="truncate">{tool.name}</span>
                      </div>
                      
                      {/* Description */}
                      <div className="w-full font-['Inter'] font-semibold text-base leading-[19px] tracking-[-0.01em] text-[#535961] mb-2 flex items-center">
                        <span className="truncate">{tool.description_tr || 'AI tool description'}</span>
                      </div>
                      
                      {/* Categories */}
                      <div className="w-full flex flex-row items-center p-0 gap-[3px]">
                        {tool.categories.slice(0, 3).map((category, index) => (
                          <span key={category} className="flex items-center">
                            <span className="font-['Inter'] font-normal text-xs leading-[15px] text-[#888E96] whitespace-nowrap">{category}</span>
                            {index < Math.min(tool.categories.length - 1, 2) && (
                              <span className="w-[9px] h-[11.16px] font-['Inter'] font-normal text-[30px] leading-[10px] text-[#888E96] ml-[3px] flex-shrink-0">·</span>
                            )}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Price */}
                    <div className="w-[50px] h-[17px] font-['Inter'] font-semibold text-sm leading-[17px] tracking-[-0.01em] text-[#000000] flex-shrink-0 flex items-center justify-center mr-3">
                      <span className="whitespace-nowrap">
                        {tool.has_free_plan ? 'Bedava' : 
                         tool.sales_action === 'price' && tool.prices?.pro ? `$${tool.prices.pro}` : 
                         'Fiyat'}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            // Fallback: Show placeholder message when no related tools found
            <div className="w-full text-center text-gray-500 py-8">
              <p>Bu kategoriden başka araç bulunamadı.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
