"use strict";
// import HttpClient from "../../utils/http-client";
// import * as cheerio from "cheerio";
// import { PersianPoemsTelegramBot } from "../..";
// import { Context, InlineKeyboard, RawApi } from "grammy";
// import { Other } from "grammy/out/core/api";
// const HafezHttpClient = new HttpClient("https://ganjoor.net/saadi/");
// const itemsPerPage = 10;
// const sendAReply = (ctx: Context, text: string, options?: any) => {
//   ctx.reply(text, options);
// };
// const getPoetStartList = async () => {
//   const htmlPage = await HafezHttpClient.getData("");
//   let $ = cheerio.load(htmlPage);
//   let list: any = [];
//   $(".part-title-block a").each(function (i, elem) {
//     list[i] = {
//       text: $(this).text(),
//       link: $(elem).attr("href"),
//     };
//   });
//   return list;
// };
// const createPoetStartScreen = async (ctx: Context) => {
//   let keyboard = [];
//   const list = await getPoetStartList();
//   console.log(list);
//   list.forEach((item: any) => {
//     keyboard.push([
//       {
//         text: item.text,
//         callback_data: `saadi_poem_category_select:${item.link}`,
//       },
//     ]);
//   });
//   keyboard.push([
//     {
//       text: "بازگشت",
//       callback_data: `hafez_poems`,
//     },
//   ]);
//   const text = "سعدی";
//   sendAReply(ctx, text, { reply_markup: { inline_keyboard: keyboard } });
// };
// const getPoems = async (
//   type:
//     | "divan/ghetes"
//     | "divan/ghazal"
//     | "divan/robaees"
//     | "boostan/niyayesh"
//     | "masnavi"
// ) => {
//   const htmlPage = await HafezHttpClient.getData(type);
//   let $ = cheerio.load(htmlPage);
//   // Select the list items and map over them
//   let list: any = [];
//   $(".poem-excerpt").each(function (i, elem) {
//     list[i] = {
//       text: $(this).text(),
//       link: $(elem).children().attr("href"),
//     };
//   });
//   return list;
// };
// const extractPoemsText = async (type: any) => {
//   const poemHtml = await HafezHttpClient.getData(type);
//   let $ = cheerio.load(poemHtml);
//   let items: any = [];
//   $(".b").each((index, element) => {
//     let m1Text = $(element).find(".m1 p").text();
//     let m2Text = $(element).find(".m2 p").text();
//     items.push({ m1: m1Text, m2: m2Text });
//   });
//   let poem = "";
//   items.forEach((item: any) => {
//     poem += `${item.m1}\n \n`;
//   });
//   return poem;
// };
// const saadiPoemsInPersian = async () => {
//   // one button each
//   const poets: {
//     [x: string]: {
//       title: {
//         en: string;
//         fa: string;
//       };
//       id: string;
//     };
//   } = {
//     hafez: {
//       title: {
//         en: "Hafez",
//         fa: "خواجه حافظ شیرازی",
//       },
//       id: "0",
//     },
//     saadi: {
//       title: {
//         en: "Saadi",
//         fa: "سعدی",
//       },
//       id: "1",
//     },
//   };
//   const getPoetNameById = (poetId: string) => {
//     switch (poetId) {
//       case "0":
//         return "Hafez";
//       case "1":
//         return "Saadi";
//     }
//   };
//   PersianPoemsTelegramBot.bot?.callbackQuery(
//     /saadi_poem_category_select:(.+)/,
//     (ctx) => {
//       console.log(ctx.match[1]);
//       // const poetId = ctx.match[1];
//       // switch (getPoetNameById(poetId)) {
//       //   case "Hafez":
//       //   // return createHafez(ctx, "editMessage");
//       //   case "Saadi":
//       //     ctx.reply("soon");
//       //   // return createSaadi(ctx, "editMessage");
//       // }
//       //   console.log(ctx.callbackQuery, ctx.match);
//     }
//   );
//   const createPoetMenu = (
//     ctx: Context,
//     editOrReply: "editMessage" | "replyMessage"
//   ) => {
//     const menu = new InlineKeyboard();
//     const text =
//       "به ربات تلگرام شعر های حافظ خوش آمدید. در این ربات، شما می توانید شعر های زیبای حافظ را بخوانید. همچنین با استفاده از دستور /poem می توانید شعر روز را دریافت کنید. لذت ببرید.";
//     menu.text("اشعار حافظ", "hafez_poems").row();
//     menu.text("فال حافظ", "hafez_get_fal").row();
//     menu.text("درباره حافظ", "hafez_bio").row();
//     if (editOrReply === "editMessage") {
//       return ctx.editMessageText(text, {
//         reply_markup: menu,
//       });
//     }
//     if (editOrReply === "replyMessage") {
//       return ctx.reply(text, {
//         reply_markup: menu,
//       });
//     }
//   };
//   PersianPoemsTelegramBot.addCommandEventListener("start", (ctx) =>
//     createPoetStartScreen(ctx)
//   );
//   PersianPoemsTelegramBot.start();
// };
// export { saadiPoemsInPersian };
