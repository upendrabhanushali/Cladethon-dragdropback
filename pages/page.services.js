import Pages from './Page.modal';

export const createPage=async(pageBody)=>{
    const slug=pageBody.name.toLowerCase().split(" ").join("-")
    pageBody.slug=slug;
    const page=new Pages(pageBody);
    const pageResponse= await page.save();
    return pageResponse
}
export const listPages=async()=>{
    const pages=await Pages.find({})
    return pages
}
export const deletePage=async(pageId)=>{
    const page=await Pages.findByIdAndRemove(pageId)
    return page;
}
export const updatePage=async(padeId,pageBody)=>{}
export const pageDetails=async(pageId)=>{
    const page=await Pages.findOne({_id:pageId})
    return page;
}
export const savePageContent=async(pageId,pageContent)=>{
    const page=await Pages.findOneAndUpdate({_id:pageId}, {content:pageContent})
    return page;
}