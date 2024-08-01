import { Router } from 'express';
import { PurchaseEvent, PageViewEvent, ViewContentEvent , AddToCartEvent, InitiateCheckoutEvent, AddPaymentInfoEvent, LeadEvent, SubmitApplicationEvent} from './events';

const routes = Router();

routes.post('/track/purchase', PurchaseEvent);
routes.post('/track/pageview', PageViewEvent);

routes.post('/track/viewcontent', ViewContentEvent);
routes.post('/track/addtocart', AddToCartEvent);
routes.post('/track/initiatecheckout', InitiateCheckoutEvent);
routes.post('/track/addpaymentinfo', AddPaymentInfoEvent);
routes.post('/track/lead', LeadEvent);
routes.post('/track/submitapplication', SubmitApplicationEvent);

export { routes };
