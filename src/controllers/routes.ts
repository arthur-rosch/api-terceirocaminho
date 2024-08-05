import { Router } from 'express';
import { PageViewEvent, ViewContentEvent, ClickEvent} from './events';

const routes = Router();
300
// routes.post('/track/purchase', PurchaseEvent);
routes.post('/track/pageview', PageViewEvent);

routes.post('/track/viewcontent', ViewContentEvent);
routes.post('/track/click', ClickEvent);
// routes.post('/track/addtocart', AddToCartEvent);
// routes.post('/track/initiatecheckout', InitiateCheckoutEvent);
// routes.post('/track/addpaymentinfo', AddPaymentInfoEvent);
// routes.post('/track/lead', LeadEvent);
// routes.post('/track/submitapplication', SubmitApplicationEvent);

export { routes };
