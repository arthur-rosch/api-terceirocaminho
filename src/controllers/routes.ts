import { Router } from 'express';
import { PageViewEvent, ViewContentEvent, ClickEvent, LeadEvent, ContactEvent, InitiateCheckoutEvent, CartAbandonmentEvent, PurchaseCompletedEvent} from './events';

const routes = Router();
300
// routes.post('/track/purchase', PurchaseEvent);
routes.post('/track/pageview', PageViewEvent);
routes.post('/track/viewcontent', ViewContentEvent);
routes.post('/track/click', ClickEvent);
routes.post('/track/lead', LeadEvent);
routes.post('/track/contact', ContactEvent);
routes.post('/track/initiatecheckout', InitiateCheckoutEvent);
routes.post('/track/cartAbandonmentEvent', CartAbandonmentEvent);
routes.post('/track/purchaseCompletedEvent', PurchaseCompletedEvent);

export { routes };
