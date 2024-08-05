import { Request, Response } from 'express';
const bizSdk = require('facebook-nodejs-business-sdk');
const EventRequest = bizSdk.EventRequest;
const UserData = bizSdk.UserData;
const ServerEvent = bizSdk.ServerEvent;

const access_token = 'EAAF3tV4P2OYBO03q1BnfOXlMzfZAbATQYRsoM2JGJjrZBqy98cN13cZCVQMoGjwqcJZBtoXTxyqHcVPwZB7lHOJjoRhbI0LT9m4cUq98Ne3NDwuIfE08waGNDGJb6ZAylFr0jTZCRujZAuWxHPOYZB82nTsZATs5HRKYNtUPJ0dxChPoLoCW30JFO9wu34xKfUjBx7Og';
const pixel_id = '574051084450238';
const api = bizSdk.FacebookAdsApi.init(access_token);

const sendPageViewEvent = async (req: Request, res: Response) => {
  const current_timestamp = Math.floor(new Date().getTime() / 1000);
  const userIp = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  const userAgent = req.headers['user-agent'];
  const fbp = req.body.fbp;
  const fbc = req.body.fbc;

  const userData = new UserData()
    .setClientIpAddress(userIp)
    .setClientUserAgent(userAgent)
    .setFbp(fbp)
    .setFbc(fbc);

  const serverEvent = new ServerEvent()
    .setEventName('PageView')
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

const sendViewContentEvent = async (req: Request, res: Response) => {
  const current_timestamp = Math.floor(new Date().getTime() / 1000);
  const userIp = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  const userAgent = req.headers['user-agent'];
  const fbp = req.body.fbp;
  const fbc = req.body.fbc;

  const userData = new UserData()
    .setClientIpAddress(userIp)
    .setClientUserAgent(userAgent)
    .setFbp(fbp)
    .setFbc(fbc);

  const serverEvent = new ServerEvent()
    .setEventName('ViewContent')
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

const sendClickEvent = async (req: Request, res: Response) => {
  const current_timestamp = Math.floor(new Date().getTime() / 1000);
  const userIp = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  const userAgent = req.headers['user-agent'];
  const fbp = req.body.fbp;
  const fbc = req.body.fbc;

  const userData = new UserData()
    .setClientIpAddress(userIp)
    .setClientUserAgent(userAgent)
    .setFbp(fbp)
    .setFbc(fbc);

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

export const PageViewEvent = async (req: Request, res: Response) => {
  await sendPageViewEvent(req, res);
};

export const ViewContentEvent = async (req: Request, res: Response) => {
  await sendViewContentEvent(req, res);
};

export const ClickEvent = async (req: Request, res: Response) => {
  await sendClickEvent(req, res);
};
