import { Request, Response } from 'express';
const bizSdk = require('facebook-nodejs-business-sdk');
const Content = bizSdk.Content;
const CustomData = bizSdk.CustomData;
const DeliveryCategory = bizSdk.DeliveryCategory;
const EventRequest = bizSdk.EventRequest;
const UserData = bizSdk.UserData;
const ServerEvent = bizSdk.ServerEvent;

const access_token = 'EAAHQXZCbUW8cBO1B7MFLZBGXshl9BnwrnvsZBRI02GXQ3p7rgo5vInyUH8uTz7hZCjeEAWFrZB3RnkQCxOIMOmZBWLXsBpPDn7DIemU2eCXzJxal9RyPohHTaZBMJSgZCjc7AFZAPSiZAK4LZCeCvTjZCIszFW412uR2KXWT1jlWRF69ds6WWbl3vN3mbvjtJjM8VbmvWQZDZD';
const pixel_id = '1915012952348575';
const api = bizSdk.FacebookAdsApi.init(access_token);

const mockUserData = () => {
  return (new UserData())
    .setEmails(['joe@eg.com'])
    .setPhones(['12345678901', '14251234567'])
    .setClientIpAddress('192.168.1.1')
    .setClientUserAgent('Mozilla/5.0')
    .setFbp('fb.1.1558571054389.1098115397')
    .setFbc('fb.1.1554763741205.AbCdEfGhIjKlMnOpQrStUvWxYz1234567890')
    .setFirstName('John')
    .setLastName('Doe')
    .setGender('male')
    .setDateOfBirth('1990-01-01')
    .setCity('San Francisco')
    .setState('CA')
    .setCountry('US')
    .setZip('94105');
};

const sendEvent = async (eventName: string, req: Request, res: Response) => {
  let current_timestamp = Math.floor(new Date().getTime() / 1000);

  const userData = mockUserData();

  const content = (new Content())
    .setId(req.body.productId || 'product123')
    .setQuantity(req.body.quantity || 1)
    .setDeliveryCategory(DeliveryCategory.HOME_DELIVERY);

  const customData = (new CustomData())
    .setContents([content])
    .setCurrency(req.body.currency || 'usd')
    .setValue(req.body.value || 123.45);

  const serverEvent = (new ServerEvent())
    .setEventName(eventName)
    .setEventTime(current_timestamp)
    .setUserData(userData)
    .setCustomData(customData)
    .setEventSourceUrl(req.body.url || 'http://example.com')
    .setActionSource('website');

  const eventsData = [serverEvent];
  const eventRequest = (new EventRequest(access_token, pixel_id))
    .setEvents(eventsData);

  try {
    const response = await eventRequest.execute();
    res.status(200).json({ success: true, response });
  } catch (error) {
    res.status(500).json({ success: false, error: error });
  }
};

export const PurchaseEvent = async (req: Request, res: Response) => {
  await sendEvent('Purchase', req, res);
};

export const PageViewEvent = async (req: Request, res: Response) => {
  await sendEvent('PageView', req, res);
};

export const ViewContentEvent = async (req: Request, res: Response) => {
  await sendEvent('ViewContent', req, res);
};

export const AddToCartEvent = async (req: Request, res: Response) => {
  await sendEvent('AddToCart', req, res);
};

export const InitiateCheckoutEvent = async (req: Request, res: Response) => {
  await sendEvent('InitiateCheckout', req, res);
};

export const AddPaymentInfoEvent = async (req: Request, res: Response) => {
  await sendEvent('AddPaymentInfo', req, res);
};

export const LeadEvent = async (req: Request, res: Response) => {
  await sendEvent('Lead', req, res);
};

export const SubmitApplicationEvent = async (req: Request, res: Response) => {
  await sendEvent('SubmitApplication', req, res);
};
