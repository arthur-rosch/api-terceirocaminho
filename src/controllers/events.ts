import { Request, Response } from 'express';
const bizSdk = require('facebook-nodejs-business-sdk');
const EventRequest = bizSdk.EventRequest;
const UserData = bizSdk.UserData;
const ServerEvent = bizSdk.ServerEvent;
const Content = bizSdk.Content;
const CustomData = bizSdk.CustomData;

const access_token = 'EAAF3tV4P2OYBO03q1BnfOXlMzfZAbATQYRsoM2JGJjrZBqy98cN13cZCVQMoGjwqcJZBtoXTxyqHcVPwZB7lHOJjoRhbI0LT9m4cUq98Ne3NDwuIfE08waGNDGJb6ZAylFr0jTZCRujZAuWxHPOYZB82nTsZATs5HRKYNtUPJ0dxChPoLoCW30JFO9wu34xKfUjBx7Og';
const pixel_id = '574051084450238';
const api = bizSdk.FacebookAdsApi.init(access_token);

const sendPageViewEvent = async (req: Request, res: Response) => {
  const current_timestamp = Math.floor(new Date().getTime() / 1000);
  const userIp = req.headers['x-forwarded-for']
  const userAgent = req.headers['user-agent'];
  const fbp = req.body.fbp;
  const fbc = req.body.fbc;
  console.log(fbc, fbp, userIp, userAgent)

  const content = (new Content())
    .setId('terceirocaminho')
    .setQuantity(1)

  const customData = (new CustomData())
    .setContents([content])
    .setCurrency("BRL")
    .setValue("997");


  const userData = new UserData()
    .setClientIpAddress(userIp)
    .setClientUserAgent(userAgent)
    .setFbp(fbp)
    .setFbc(fbc)
    .setEmails(['joe@gmail.com'])
    .setPhones(['47984473369'])
    .setFirstName('John')
    .setLastName('Doe')
    .setGender('male')
    .setDateOfBirth('1990-01-01')
    .setCity('São Paulo')
    .setState('SP')
    .setCountry('BR')
    .setZip('01526-000');


  const serverEvent = new ServerEvent()
    .setEventName('PageView')
    .setEventTime(current_timestamp)
    .setUserData(userData)
    .setEventSourceUrl(req.body.url || 'http://example.com')
    .setActionSource('website')
    .setCustomData(customData);

  const eventsData = [serverEvent];
  const eventRequest = new EventRequest(access_token, pixel_id).setEvents(eventsData);

  try {
    const response = await eventRequest.execute();
    res.status(200).json({ success: true, response });
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
};

const sendViewContentEvent = async (req: Request, res: Response) => {
  const current_timestamp = Math.floor(new Date().getTime() / 1000);
  const userIp = req.connection.remoteAddress;
  const userAgent = req.headers['user-agent'];
  const fbp = req.body.fbp;
  const fbc = req.body.fbc;

   const content = (new Content())
    .setId('terceirocaminho')
    .setQuantity(1)

  const customData = (new CustomData())
    .setContents([content])
    .setCurrency("BRL")
    .setValue("997");

  const userData = new UserData()
    .setClientIpAddress(userIp)
    .setClientUserAgent(userAgent)
    .setFbp(fbp)
    .setFbc(fbc)
    .setEmails(['joe@gmail.com'])
    .setPhones(['47984473369'])
    .setFirstName('John')
    .setLastName('Doe')
    .setGender('male')
    .setDateOfBirth('1990-01-01')
    .setCity('São Paulo')
    .setState('SP')
    .setCountry('BR')
    .setZip('01526-000');

  const serverEvent = new ServerEvent()
    .setEventName('ViewContent')
    .setEventTime(current_timestamp)
    .setUserData(userData)
    .setEventSourceUrl(req.body.url || 'http://example.com')
    .setActionSource('website')
    .setCustomData(customData);

  const eventsData = [serverEvent];
  const eventRequest = new EventRequest(access_token, pixel_id).setEvents(eventsData);

  try {
    const response = await eventRequest.execute();
    res.status(200).json({ success: true, response });
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
};

const sendClickEvent = async (req: Request, res: Response) => {
  const current_timestamp = Math.floor(new Date().getTime() / 1000);
  const userIp = req.connection.remoteAddress;
  const userAgent = req.headers['user-agent'];
  const fbp = req.body.fbp;
  const fbc = req.body.fbc;

  const userData = new UserData()
    .setClientIpAddress(userIp)
    .setClientUserAgent(userAgent)
    .setFbp(fbp)
    .setFbc(fbc)
    .setEmails(['joe@gmail.com'])
    .setPhones(['47984473369'])
    .setFirstName('John')
    .setLastName('Doe')
    .setGender('male')
    .setDateOfBirth('1990-01-01')
    .setCity('São Paulo')
    .setState('SP')
    .setCountry('BR')
    .setZip('01526-000');

  const serverEvent = new ServerEvent()
    .setEventName('AddToCart')  // Use 'TrackClick' or another relevant event name if needed
    .setEventTime(current_timestamp)
    .setUserData(userData)
    .setEventSourceUrl(req.body.url || 'http://example.com')
    .setActionSource('website');

  const eventsData = [serverEvent];
  const eventRequest = new EventRequest(access_token, pixel_id).setEvents(eventsData);

  try {
    const response = await eventRequest.execute();
    res.status(200).json({ success: true, response });
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
};

const sendLeadEvent = async (req: Request, res: Response) => {
  const current_timestamp = Math.floor(new Date().getTime() / 1000);
  const userIp = req.connection.remoteAddress;
  const userAgent = req.headers['user-agent'];
  const fbp = req.body.fbp;
  const fbc = req.body.fbc;
  const name = req.body.name;
  const email = req.body.email;
  const phone = req.body.phone;


  const content = (new Content())
    .setId('terceirocaminho')
    .setQuantity(1)

  const customData = (new CustomData())
    .setContents([content])
    .setCurrency("BRL")
    .setValue("997");

  const userData = new UserData()
    .setClientIpAddress(userIp)
    .setClientUserAgent(userAgent)
    .setFbp(fbp)
    .setFbc(fbc)
    .setEmails([email])
    .setPhones([phone])
    .setFirstName(name)
    .setLastName(name)
    .setGender('male')
    .setDateOfBirth('1990-01-01')
    .setCity('São Paulo')
    .setState('SP')
    .setCountry('BR')
    .setZip('01526-000');

  const serverEvent = new ServerEvent()
    .setEventName('Lead')
    .setEventTime(current_timestamp)
    .setUserData(userData)
    .setEventSourceUrl(req.body.url || 'http://example.com')
    .setActionSource('website')
    .setCustomData(customData);

  const eventsData = [serverEvent];
  const eventRequest = new EventRequest(access_token, pixel_id).setEvents(eventsData);

  try {
    const response = await eventRequest.execute();
    res.status(200).json({ success: true, response });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error });
  }
};

const sendContactEvent = async (req: Request, res: Response) => {
  const current_timestamp = Math.floor(new Date().getTime() / 1000);
  const userIp = req.connection.remoteAddress;
  const userAgent = req.headers['user-agent'];
  const fbp = req.body.fbp;
  const fbc = req.body.fbc;

  const content = (new Content())
    .setId('terceirocaminho')
    .setQuantity(1)

  const customData = (new CustomData())
    .setContents([content])
    .setCurrency("BRL")
    .setValue("997");

  const userData = new UserData()
    .setClientIpAddress(userIp)
    .setClientUserAgent(userAgent)
    .setFbp(fbp)
    .setFbc(fbc)
    .setEmails(['joe@gmail.com'])
    .setPhones(['47984473369'])
    .setFirstName('John')
    .setLastName('Doe')
    .setGender('male')
    .setDateOfBirth('1990-01-01')
    .setCity('São Paulo')
    .setState('SP')
    .setCountry('BR')
    .setZip('01526-000');

  const serverEvent = new ServerEvent()
    .setEventName('Contact')
    .setEventTime(current_timestamp)
    .setUserData(userData)
    .setEventSourceUrl(req.body.url || 'http://example.com')
    .setActionSource('website')
    .setCustomData(customData);

  const eventsData = [serverEvent];
  const eventRequest = new EventRequest(access_token, pixel_id).setEvents(eventsData);

  try {
    const response = await eventRequest.execute();
    res.status(200).json({ success: true, response });
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
};

const sendInitiateCheckoutEvent = async (req: Request, res: Response) => {
  const current_timestamp = Math.floor(new Date().getTime() / 1000);
  const userIp = req.connection.remoteAddress;
  const userAgent = req.headers['user-agent'];
  const fbp = req.body.fbp;
  const fbc = req.body.fbc;
  const name = req.body.name;
  const email = req.body.email;
  const phone = req.body.phone;

   const content = (new Content())
    .setId('terceirocaminho')
    .setQuantity(1)

  const customData = (new CustomData())
    .setContents([content])
    .setCurrency("BRL")
    .setValue("997");

  const userData = new UserData()
    .setClientIpAddress(userIp)
    .setClientUserAgent(userAgent)
    .setFbp(fbp)
    .setFbc(fbc)   
    .setEmails([email])
    .setPhones([phone])
    .setFirstName(name)
    .setLastName(name)
    .setGender('male')
    .setDateOfBirth('1990-01-01')
    .setCity('São Paulo')
    .setState('SP')
    .setCountry('BR')
    .setZip('01526-000');

  const serverEvent = new ServerEvent()
    .setEventName('InitiateCheckout')
    .setEventTime(current_timestamp)
    .setUserData(userData)
    .setEventSourceUrl(req.body.url || 'http://example.com')
    .setActionSource('website')
    .setCustomData(customData);

  const eventsData = [serverEvent];
  const eventRequest = new EventRequest(access_token, pixel_id).setEvents(eventsData);

  try {
    const response = await eventRequest.execute();
    res.status(200).json({ success: true, response });
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
};

const sendPurchaseCompletedEvent = async (req: Request, res: Response) => {
  const current_timestamp = Math.floor(new Date().getTime() / 1000);
  const userIp = req.connection.remoteAddress;
  const userAgent = req.headers['user-agent'];
  const fbp = req.body.fbp;
  const fbc = req.body.fbc;
  const email = req.body.data.buyer.email;
  const name = req.body.data.buyer.name;
  const phone = req.body.data.buyer.checkout_phone;
  const address = req.body.data.buyer.address;
  const purchase = req.body.data.purchase

  const userData = new UserData()
    .setClientIpAddress(userIp)
    .setClientUserAgent(userAgent)
    .setFbp(fbp)
    .setFbc(fbc)
    .setEmails([email])
    .setPhones([phone])
    .setFirstName(name)
    .setLastName(name)
    .setCity(address.city)
    .setState(address.state)
    .setCountry(address.country_iso)
    .setZip(address.zipcode);

  const content = (new Content())
    .setId('terceirocaminho')
    .setQuantity(1)

  const customData = (new CustomData())
    .setContents([content])
    .setCurrency(purchase.full_price.currency_value)
    .setValue(purchase.full_price.value);

  const serverEvent = new ServerEvent()
    .setEventName('Purchase')
    .setEventTime(current_timestamp)
    .setUserData(userData)
    .setEventSourceUrl(req.body.url || 'http://example.com')
    .setActionSource('website')
    .setCustomData(customData);

 

  const eventsData = [serverEvent];
  const eventRequest = new EventRequest(access_token, pixel_id).setEvents(eventsData);

  try {
    if(req.body.event === "PURCHASE_COMPLETE" || req.body.event === "PURCHASE_APPROVED") {
      const response = await eventRequest.execute();
      res.status(200).json({ success: true, response });
    } else {
      res.status(200).json({ success: true });
    }

  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error });
  }
};

const sendCartAbandonmentEvent = async (req: Request, res: Response) => {
  const current_timestamp = Math.floor(new Date().getTime() / 1000);
  const userIp = req.connection.remoteAddress;
  const userAgent = req.headers['user-agent'];
  const fbp = req.body.fbp;
  const fbc = req.body.fbc;
  const { buyer, checkout_country} = req.body.data
   
  const content = (new Content())
    .setId('terceirocaminho')
    .setQuantity(1)

  const customData = (new CustomData())
    .setContents([content])
    .setCurrency("BRL")
    .setValue("997");

  const userData = new UserData()
    .setClientIpAddress(userIp)
    .setClientUserAgent(userAgent)
    .setFbp(fbp)
    .setFbc(fbc)
    .setEmails([buyer.email])
    .setPhones([buyer.phone])
    .setFirstName(buyer.name)
    .setLastName(buyer.name)
    .setDateOfBirth('1990-01-01')
    .setCity('São Paulo')
    .setState('SP')
    .setCountry('BR')
    .setZip('01526-000');

  const serverEvent = new ServerEvent()
    .setEventName('CartAbandonment')
    .setEventTime(current_timestamp)
    .setUserData(userData)
    .setEventSourceUrl(req.body.url || 'http://example.com')
    .setActionSource('website')
    .setCustomData(customData);

  const eventsData = [serverEvent];
  const eventRequest = new EventRequest(access_token, pixel_id).setEvents(eventsData);

  try {
    const response = await eventRequest.execute();
    res.status(200).json({ success: true, response });
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
};

export const InitiateCheckoutEvent = async (req: Request, res: Response) => {
  await sendInitiateCheckoutEvent(req, res);
};

export const PurchaseCompletedEvent = async (req: Request, res: Response) => {
  await sendPurchaseCompletedEvent(req, res);
};

export const CartAbandonmentEvent = async (req: Request, res: Response) => {
  await sendCartAbandonmentEvent(req, res);
};

export const ContactEvent = async (req: Request, res: Response) => {
  await sendContactEvent(req, res);
};

export const LeadEvent = async (req: Request, res: Response) => {
  await sendLeadEvent(req, res);
};

export const PageViewEvent = async (req: Request, res: Response) => {
  await sendPageViewEvent(req, res);
};

export const ViewContentEvent = async (req: Request, res: Response) => {
  await sendViewContentEvent(req, res);
};

export const ClickEvent = async (req: Request, res: Response) => {
  await sendClickEvent(req, res);
};
