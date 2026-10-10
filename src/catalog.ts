export const cases = [
  {id:'graphite',name:'Graphite',color:'#353b43',price:0},
  {id:'silver',name:'Silver',color:'#a8b1bd',price:15},
  {id:'blue',name:'Midnight blue',color:'#31557e',price:25},
] as const
export const caps = [
  {id:'fog',name:'Fog',color:'#d0d4d9',ink:'#303741',price:0},
  {id:'ink',name:'Ink',color:'#444c58',ink:'#edf2f8',price:10},
  {id:'arctic',name:'Arctic',color:'#8cb8df',ink:'#1d344e',price:20},
] as const
export const switches = [
  {id:'linear',name:'Linear',feel:'Smooth, uninterrupted travel.',force:'45 g',color:'#c7a6a6',price:0},
  {id:'tactile',name:'Tactile',feel:'A gentle bump with every press.',force:'55 g',color:'#8aabcf',price:15},
  {id:'silent',name:'Silent linear',feel:'A softer landing, a quieter desk.',force:'42 g',color:'#acb5bf',price:25},
] as const
export type Config = {caseId:string;capId:string;switchId:string}
export const defaults:Config={caseId:'graphite',capId:'fog',switchId:'linear'}
export function normalize(value:Partial<Config>):Config {
 return {caseId:cases.some(x=>x.id===value.caseId)?value.caseId!:defaults.caseId,capId:caps.some(x=>x.id===value.capId)?value.capId!:defaults.capId,switchId:switches.some(x=>x.id===value.switchId)?value.switchId!:defaults.switchId}
}
export function selection(c:Config){return {body:cases.find(x=>x.id===c.caseId)!,cap:caps.find(x=>x.id===c.capId)!,switch:switches.find(x=>x.id===c.switchId)!}}
export function price(c:Config){const x=selection(normalize(c));return 149+x.body.price+x.cap.price+x.switch.price}
export const money=(n:number)=>new Intl.NumberFormat('en-US',{style:'currency',currency:'USD',maximumFractionDigits:0}).format(n)
