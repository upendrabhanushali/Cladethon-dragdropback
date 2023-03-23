import express from 'express';
import {create, changeContent, update,deletePageRecord, list, details, loadContent} from './page.controller';
const pageRoute=express.Router()

pageRoute.post('/',create);
pageRoute.post('/:pageId/content',changeContent);
pageRoute.put('/:pageId',update);
pageRoute.delete('/:pageId',deletePageRecord);
pageRoute.get('/',list);
pageRoute.get('/:pageId',details);
pageRoute.get('/:pageId/content', loadContent);

export default pageRoute

