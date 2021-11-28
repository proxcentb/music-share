import { Emoji, Description } from "./helpers";
import iSee from '../assets/emojis/iSee.png';
import PepeHands from '../assets/emojis/PepeHands.png';
import Sadeg from '../assets/emojis/Sadeg.png';
import monkaOMEGA from '../assets/emojis/monkaOMEGA.png';

const rawVideos = [
  {
    embedId: 'va810QKC1S0',
    score: 58, 
    tags: ['инструментальная', 'печальная', 'спокойная', 'классическая'],
    description: null,
  },
  {
    embedId: '2Od7QCsyqkE',
    score: 71,
    tags: ['японская', 'активная', 'жизнеутверждающая'],
    description: null,
  },
  {
    embedId: 'mcywsWmHEVc',
    score: 89,
    tags: ['японская', 'жизнеутверждающая', 'спокойная'],
    description: null,
  },
  {
    embedId: 'FQs9cV0jycg',
    score: 86,
    tags: ['инструментальная', 'xi', 'активная', 'электронная'],
    description: null,
  },
  {
    embedId: 'jO4fTcziVRM',
    score: 80,
    tags: ['инструментальная', 'xi', 'активная', 'электронная'],
    description: null,
  },
  {
    embedId: 'U4LcyjRFDds',
    score: 72,
    tags: ['японская', 'вокалоид'],
    description: null,
  },
  {
    embedId: '7EEUU-yIN5c',
    score: 76,
    tags: ['японская', 'вокалоид', 'жизнеутверждающая', 'активная'],
    description: null,
  },
  {
    embedId: 'Yzjum7CgQqw',
    score: 77,
    tags: ['инструментальная', 'электронная', 'активная'],
    description: null,
  },
  {
    embedId: 'k-3y2LVF_SE',
    score: 100,
    tags: ['инструментальная', 'xi', 'электронная', 'активная', 'жизнеутверждающая', 'хардкор/спидкор'],
    description: (
      <Description>
        Узнал из osu!, можно сказать, что это гимн этой игры для меня.
        Один из самых любимых треков.
        Помню всегда пытался пройти <a target="_blank" href="https://www.youtube.com/watch?v=VsYLIg67pYo">эту карту</a>
      </Description>
    ),
  },
  {
    embedId: 'EmWOznX2uUQ',
    score: 73,
    tags: ['английская', 'рок'],
    description: null,
  },
  {
    embedId: 'iQp9iud9u0I',
    score: 70,
    tags: ['инструментальная', 'активная', 'оркестровая'],
    description: null,
  },
  {
    embedId: 'lvRw5Kjx31o',
    score: 68,
    tags: ['японская', 'жизнеутверждающая'],
    description: null,
  },
  {
    embedId: 'wExQLV7Ndps',
    score: 83,
    tags: ['инструментальная', 'активная', 'электронная', 'хардкор/спидкор'],
    description: null,
  },
  {
    embedId: 'BgQ8sa0HPtQ',
    score: 80,
    tags: ['японская', 'жизнеутверждающая', 'активная', 'кельтская', 'akatsuki records'],
    description: (
      <Description>
        Очень прикольная и уникальная песня.
      </Description>
    ),
  },
  {
    embedId: 'q-v-a-NFH-Q',
    score: 77,
    tags: ['английская', 'жизнеутверждающая', 'активная'],
    description: null,
  },
  {
    embedId: 'IWEpkRoxK0o',
    score: 85,
    tags: ['инструментальная', 'электронная', 'хардкор/спидкор', 'активная'],
    description: null,
  },
  {
    embedId: 'Sq_q5MIIYX4',
    score: 67,
    tags: ['инструментальная', 'активная', 'жизнеутверждающая', 'кельтская'],
    description: null,
  },
  {
    embedId: 'w0dU7NyfN_A',
    score: 79,
    tags: ['инструментальная', 'электронная', 'хардкор/спидкор', 'активная'],
    description: null,
  },
  {
    embedId: 'HbNUR1P0fTM',
    score: 70,
    tags: ['инструментальная', 'электронная', 'хардкор/спидкор', 'активная'],
    description: null,
  },
  {
    embedId: 'EJYKsY0Vcts',
    score: 81,
    tags: ['японская', 'жизнеутверждающая'],
    description: null,
  },
  {
    embedId: 'lkicMsn-s_8',
    score: 96,
    tags: ['инструментальная', 'метал', 'активная'],
    description: null,
  },
  {
    embedId: 'f3ESZSrKvkI',
    score: 70,
    tags: ['инструментальная', 'phyxinon', 'печальная', 'классическая'],
    description: null,
  },
  {
    embedId: 'Pn7dCgtwX2c',
    score: 60,
    tags: ['японская', 'активная'],
    description: null,
  },
  {
    embedId: 'HLD_T_TCv-w',
    score: 92,
    tags: ['инструментальная', 'печальная', 'активная', 'оркестровая'],
    description: null,
  },
  {
    embedId: 'ZwfjS5CvedM',
    score: 84,
    tags: ['японская', 'спокойная', 'kalafina', 'yuki kajiura'],
    description: null,
  },
  {
    embedId: 'N_SWfKjvlvw',
    score: 84,
    tags: ['инструментальная', 'активная', 'электронная', 'хардкор/спидкор'],
    description: null,
  },
  {
    embedId: '-wILF0YwvNM',
    score: 78,
    tags: ['японская', 'спокойная', 'kalafina', 'yuki kajiura'],
    description: null,
  },
  {
    embedId: 'srhni4w2TbI',
    score: 80,
    tags: ['японская', 'активная', 'жизнеутверждающая'],
    description: null,
  },
  {
    embedId: 'Kkgp1-fHn6Y',
    score: 80,
    tags: ['инструментальная', 'активная', 'электронная'],
    description: null,
  },
  {
    embedId: 'PstkKL72mw0',
    score: 90,
    tags: ['японская', 'love solfege', 'кельтская', 'спокойная'],
    description: null,
  },
  {
    embedId: '6IkuV_lZtiI',
    score: 80,
    tags: ['инструментальная', 'печальная', 'спокойная', 'оркестровая'],
    description: null,
  },
  {
    embedId: 'b1bXu0XZDlU',
    score: 84,
    tags: ['японская', 'спокойная', 'kalafina', 'yuki kajiura'],
    description: null,
  },
  {
    embedId: 'aEHxqBHCkFc',
    score: 86,
    tags: ['японская', 'активная', 'жизнеутверждающая'],
    description: null,
  },
  {
    embedId: 'UWwzmed9Z5U',
    score: 76,
    tags: ['японская', 'жизнеутверждающая', 'активная'],
    description: null,
  },
  {
    embedId: 'XbRPOR19p_c',
    score: 68,
    tags: ['японская', 'активная', 'жизнеутверждающая'],
    description: (
      <Description>
        Очень нравится часть с 0:58.
      </Description>
    ),
  },
  {
    embedId: 'U1oeOZVtA84',
    score: 80,
    tags: ['японская', 'вокалоид', 'жизнеутверждающая', 'активная'],
    description: null,
  },
  {
    embedId: 'oozQ4yV__Vw',
    score: 86,
    tags: ['английская', 'активная', 'жизнеутверждающая'],
    description: (
      <Description>
        Скорее всего, это песня была дольше всех других в моем плейлисте.
      </Description>
    ),
  },
  {
    embedId: 'dkCMpHF27fo',
    score: 82,
    tags: ['японская'],
    description: null,
  },
  {
    embedId: '6fILxnBH1Tg',
    score: 80,
    tags: ['инструментальная', 'активная', 'оркестровая'],
    description: null,
  },
  {
    embedId: 'JxFUY7Ka8e0',
    score: 90,
    tags: ['японская', 'спокойная', 'жизнеутверждающая'],
    description: null,
  },
  {
    embedId: 'eJhCAnjz8ZA',
    score: 74,
    tags: ['японская', 'вокалоид', 'жизнеутверждающая', 'активная'],
    description: null,
  },
  {
    embedId: '8nxuNiRJKRg',
    score: 77,
    tags: ['японская', 'активная', 'электронная'],
    description: null,
  },
  {
    embedId: 'swZd3u6voNE',
    score: 88,
    tags: ['японская', 'love solfege', 'спокойная'],
    description: null,
  },
  {
    embedId: 'SrEHyYlJjVA',
    score: 90,
    tags: ['инструментальная', 'активная', 'электронная', 'хардкор/спидкор'],
    description: null,
  },
  {
    embedId: 'DN-Dcwq4i2g',
    score: 80,
    tags: ['инструментальная', 'спокойная'],
    description: null,
  },
  {
    embedId: 'S-Nll_HapuU',
    score: 77,
    tags: ['инструментальная', 'спокойная', 'phyxinon', 'классическая'],
    description: null,
  },
  {
    embedId: 't4XycIIfA6A',
    score: 94,
    tags: ['инструментальная', 'активная', 'оркестровая'],
    description: (
      <Description>
        С 2:03 вообще крутяк!
      </Description>
    ),
  },
  {
    embedId: 'W6I1xm49Lpw',
    score: 72,
    tags: ['японская', 'спокойная'],
    description: null,
  },
  {
    embedId: 'dPLKc5tdvo0',
    score: 90,
    tags: ['японская', 'спокойная', 'love solfege'],
    description: null,
  },
  {
    embedId: 'wDIzGjLwKBM',
    score: 89,
    tags: ['японская', 'спокойная', 'love solfege'],
    description: null,
  },
  {
    embedId: 'ZZvJY7_gyfw',
    score: 78,
    tags: ['японская', 'активная', 'yousei teikoku'],
    description: null,
  },
  {
    embedId: 'vw2-PDXs2zY',
    score: 87,
    tags: ['японская', 'спокойная', 'love solfege'],
    description: null,
  },
  {
    embedId: 'N_O7wkUmLqs',
    score: 80,
    tags: ['инструментальная', 'активная'],
    description: null,
  },
  {
    embedId: 'bE0hDymkLsQ',
    score: 80,
    tags: ['японская', 'спокойная', 'love solfege'],
    description: null,
  },
  {
    embedId: 'bAZuZjMD7lE',
    score: 92,
    tags: ['японская', 'спокойная', 'kalafina', 'yuki kajiura'],
    description: null,
  },
  {
    embedId: 'ady--PNMsfI',
    score: 77,
    tags: ['спокойная'],
    description: null,
  },
  {
    embedId: '4oPM8zTeois',
    score: 70,
    tags: ['инструментальная', 'печальная', 'спокойная', 'phyxinon', 'классическая'],
    description: null,
  },
  {
    embedId: '5kKnrjeDUqw',
    score: 81,
    tags: ['инструментальная', 'активная', 'электронная', 'хардкор/спидкор'],
    description: null,
  },
  {
    embedId: 'IB1URcYIaOE',
    score: 80,
    tags: ['английская', 'печальная', 'спокойная'],
    description: null,
  },
  {
    embedId: 'xHq-TEluOrM',
    score: 84,
    tags: ['инструментальная', 'спокойная', 'печальная', 'оркестровая'],
    description: (
      <Description>
        Кто за нек(г)ров играл??? <Emoji src={iSee} />
      </Description>
    ),
  },
  {
    embedId: 'qO8AoYPnr68',
    score: 69,
    tags: ['печальная', 'спокойная', 'оркестровая'],
    description: null,
  },
  {
    embedId: '-RAeuWxOif4',
    score: 88,
    tags: ['японская', 'жизнеутверждающая', 'активная', 'электронная', 'вокалоид'],
    description: null,
  },
  {
    embedId: 'zycqjvKFiHU',
    score: 89,
    tags: ['японская', 'спокойная', 'жизнеутверждающая'],
    description: null,
  },
  {
    embedId: '4_ANxTOG_Xk',
    score: 67,
    tags: ['инструментальная', 'спокойная'],
    description: null,
  },
  {
    embedId: 'pTRgr9IWLnY',
    score: 76,
    tags: ['yuki kajiura', 'спокойная', 'печальная'],
    description: null,
  },
  {
    embedId: 'by_dL99tndw',
    score: 83,
    tags: ['японская', 'вокалоид', 'жизнеутверждающая', 'спокойная'],
    description: null,
  },
  {
    embedId: 'yql9xh5UaIw',
    score: 62,
    tags: ['английская', 'nomy', 'активная', 'печальная'],
    description: null,
  },
  {
    embedId: 'Bjadoqjdz2c',
    score: 80,
    tags: ['английская', 'nomy', 'активная'],
    description: null,
  },
  {
    embedId: '5nReJMJGrRE',
    score: 84,
    tags: ['инструментальная', 'yuki kajiura', 'спокойная', 'печальная'],
    description: null,
  },
  {
    embedId: 'FqCw7gCTZQs',
    score: 80,
    tags: ['японская', 'спокойная'],
    description: null,
  },
  {
    embedId: 'fr26k_KusS4',
    score: 70,
    tags: ['японская', 'активная', 'жизнеутверждающая'],
    description: null,
  },
  {
    embedId: 'cOe9RPqg1GE',
    score: 84,
    tags: ['японская', 'активная', 'жизнеутверждающая'],
    description: null,
  },
  {
    embedId: 'nSDgHBxUbVQ',
    score: 81,
    tags: ['английская', 'печальная', 'спокойная'],
    description: null,
  },
  {
    embedId: 'M92c6pl10u0',
    score: 78,
    tags: ['японская', 'вокалоид', 'жизнеутверждающая', 'активная', 'электронная'],
    description: null,
  },
  {
    embedId: 'F8t5mR6AmK8',
    score: 68,
    tags: ['спокойная'],
    description: null,
  },
  {
    embedId: 'XTedaWpPjto',
    score: 80,
    tags: ['английская', 'активная', 'жизнеутверждающая'],
    description: null,
  },
  {
    embedId: '_4BLiOP1aaY',
    score: 68,
    tags: ['японская', 'жизнеутверждающая'],
    description: null,
  },
  {
    embedId: 'BG746QmRgqk',
    score: 90,
    tags: ['японская', 'rigël theatre', 'кельтская', 'жизнеутверждающая'],
    description: null,
  },
  {
    embedId: '_IY95itIKis',
    score: 90,
    tags: ['японская', 'rigël theatre', 'кельтская', 'жизнеутверждающая'],
    description: null,
  },
  {
    embedId: 'pV1DT5JlRlc',
    score: 91,
    tags: ['инструментальная', 'rigël theatre', 'кельтская', 'жизнеутверждающая', 'спокойная'],
    description: null,
  },
  {
    embedId: 'kv4UD4ICd_0',
    score: 93,
    tags: ['инструментальная', 'rigël theatre', 'кельтская', 'жизнеутверждающая', 'спокойная'],
    description: null,
  },
  {
    embedId: '-I--cdqDbdU',
    score: 89,
    tags: ['инструментальная', 'rigël theatre', 'кельтская', 'жизнеутверждающая', 'спокойная'],
    description: null,
  },
  {
    embedId: '1bJEjHk0BGk',
    score: 83,
    tags: ['японская', 'рок', 'активная'],
    description: null,
  },
  {
    embedId: 'T4RHuXd5pMg',
    score: 85,
    tags: ['японская', 'wagakki band', 'спокойная', 'жизнеутверждающая'],
    description: null,
  },
  {
    embedId: '3bBpiHJm3t0',
    score: 83,
    tags: ['японская', 'спокойная', 'хочется петь'],
    description: null,
  },
  {
    embedId: '64AaAySNROY',
    score: 81,
    tags: ['японская', 'спокойная', 'электронная', 'жизнеутверждающая'],
    description: null,
  },
  {
    embedId: '5qhBk_3OT-w',
    score: 82,
    tags: ['инструментальная', 'активная', 'электронная', 'хардкор/спидкор'],
    description: null,
  },
  {
    embedId: 'mi0qVkGwmSw',
    score: 78,
    tags: ['японская', 'спокойная', 'жизнеутверждающая'],
    description: null,
  },
  {
    embedId: 'eRWy0HXN3wA',
    score: 63,
    tags: ['японская', 'спокойная'],
    description: null,
  },
  {
    embedId: 'K_xTet06SUo',
    score: 90,
    tags: ['японская', 'wagakki band', 'активная', 'жизнеутверждающая'],
    description: null,
  },
  {
    embedId: '8QPyFlJNmus',
    score: 60,
    tags: ['японская', 'активная'],
    description: null,
  },
  {
    embedId: 'X_k9qpsDm34',
    score: 90,
    tags: ['японская', 'спокойная', 'жизнеутверждающая'],
    description: null,
  },
  {
    embedId: 'sGYLIlCQWtw',
    score: 70,
    tags: ['японская', 'активная'],
    description: null,
  },
  {
    embedId: 'WBAIyY9y3HM',
    score: 89,
    tags: ['инструментальная', 'спокойная', 'электронная'],
    description: null,
  },
  {
    embedId: 'vgrogIrmMNk',
    score: 95,
    tags: ['инструментальная', 'sky mubs', 'печальная', 'спокойная'],
    description: (
      <Description>
        Я плачу... <Emoji src={PepeHands} />
      </Description>
    ),
  },
  {
    embedId: 'kx5-VXpTeU8',
    score: 88,
    tags: ['японская', 'вокалоид', 'жизнеутверждающая', 'активная'],
    description: null,
  },
  {
    embedId: 'WQYN2P3E06s',
    score: 71,
    tags: ['жизнеутверждающая', 'оркестровая'],
    description: null,
  },
  {
    embedId: 'ceMVXr9puYk',
    score: 72,
    tags: ['японская', 'жизнеутверждающая', 'активная'],
    description: null,
  },
  {
    embedId: '2jGSRlXk8ag',
    score: 69,
    tags: ['японская', 'жизнеутверждающая', 'активная'],
    description: null,
  },
  {
    embedId: 'g-jGHbkM8e4',
    score: 68,
    tags: ['инструментальная', 'спокойная', 'жизнеутверждающая', 'кельтская', 'оркестровая'],
    description: null,
  },
  {
    embedId: 'OWmNcmXZwfs',
    score: 100,
    tags: ['японская', 'kalafina', 'жизнеутверждающая', 'спокойная', 'yuki kajiura'],
    description: (
      <Description>
        Супер топ!
      </Description>
    ),
  },
  {
    embedId: 'Vr70GaeeQ3s',
    score: 79,
    tags: ['английская', 'активная', 'рок'],
    description: null,
  },
  {
    embedId: '9ydC2pUQpNQ',
    score: 91,
    tags: ['японская', 'спокойная', 'печальная'],
    description: (
      <Description>
        Опенинг из <a target="_blank" href="https://shikimori.one/animes/2966-ookami-to-koushinryou">"Волчица и Пряности"</a>, 
        моя самая первая анимешка... <Emoji src={Sadeg} />
      </Description>
    ),
  },
  {
    embedId: '1_ozXudbN-4',
    score: 67,
    tags: ['инструментальная', 'активная', 'электронная', 'хардкор/спидкор'],
    description: null,
  },
  {
    embedId: 'Qbff2TSZffg',
    score: 76,
    tags: ['инструментальная', 'активная', 'электронная', 'хардкор/спидкор'],
    description: null,
  },
  {
    embedId: 'omsyef1qUvo',
    score: 73,
    tags: ['японская', 'жизнеутверждающая', 'активная'],
    description: null,
  },
  {
    embedId: 'YhS0emChH_8',
    score: 78,
    tags: ['инструментальная', 'спокойная', 'оркестровая'],
    description: null,
  },
  {
    embedId: 'Q2meWkWqc-I',
    score: 88,
    tags: ['японская', 'wagakki band', 'активная', 'жизнеутверждающая'],
    description: null,
  },
  {
    embedId: 'oVZ9nRAFR8s',
    score: 80,
    tags: ['инструментальная', 'спокойная', 'оркестровая'],
    description: null,
  },
  {
    embedId: '9gKu-FDBjy8',
    score: 78,
    tags: ['японская', 'активная', 'рок', 'yousei teikoku'],
    description: null,
  },
  {
    embedId: 'DaoyKECQnPw',
    score: 70,
    tags: ['инструментальная', 'оркестровая'],
    description: (
      <Description>
        Страшна вырубай. <Emoji src={monkaOMEGA} />
      </Description>
    ),
  },
  {
    embedId: 'Cty3jkKCD7I',
    score: 70,
    tags: ['английская', 'активная', 'электронная', 'infected mushrooms'],
    description: null,
  },
  {
    embedId: 'Uzyii85rwqo',
    score: 78,
    tags: ['английская', 'активная', 'электронная', 'infected mushrooms'],
    description: (
      <Description>
        С 2:50 крутяк!
      </Description>
    ),
  },
  {
    embedId: 'jTbCHkx5J0A',
    score: 76,
    tags: ['английская', 'активная', 'электронная', 'infected mushrooms'],
    description: null,
  },
  {
    embedId: '-b8_89vlkaI',
    score: 78,
    tags: ['инструментальная', 'спокойная', 'печальная'],
    description: null,
  },
  {
    embedId: 'QLxEBMjqxus',
    score: 68,
    tags: ['инструментальная', 'спокойная', 'жизнеутверждающая'],
    description: null,
  },
  {
    embedId: 'nCaqf9WhqOY',
    score: 87,
    tags: ['японская', 'вокалоид', 'спокойная', 'жизнеутверждающая'],
    description: null,
  },
  {
    embedId: '1gFNk_L5R1w',
    score: 88,
    tags: ['инструментальная', 'активная', 'электронная', 'хардкор/спидкор'],
    description: null,
  },
  {
    embedId: '8CNbrEBrAtA',
    score: 84,
    tags: ['японская', 'жизнеутверждающая', 'активная'],
    description: null,
  },
  {
    embedId: 'hGZL_5Wn3aQ',
    score: 89,
    tags: ['японская', 'активная', 'метал', 'ICCD'],
    description: null,
  },
  {
    embedId: 'aUWCrCXiVpA',
    score: 87,
    tags: ['английская', 'рок', 'активная'],
    description: null,
  },
  {
    embedId: '5QfrrL1nZOw',
    score: 90,
    tags: ['японская', 'спокойная', 'рок', 'yousei teikoku'],
    description: null
  },
  {
    embedId: 'vHy81GG6k2o',
    score: 85,
    tags: ['английская', 'рок', 'активная'],
    description: null,
  },
  {
    embedId: 'wjkhjFJbwrE',
    score: 82,
    tags: ['японская', 'жизнеутверждающая', 'активная'],
    description: null,
  },
  {
    embedId: 'NaRRYkw3vy8',
    score: 70,
    tags: ['инструментальная', 'спокойная'],
    description: null,
  },
  {
    embedId: 'sesKiKYQn84',
    score: 81,
    tags: ['английская', 'жизнеутверждающая', 'активная'],
    description: null,
  },
  {
    embedId: 'jhl5afLEKdo',
    score: 60,
    tags: ['японская', 'вокалоид' ],
    description: null,
  },
  {
    embedId: 'gfLcfLGzTsk',
    score: 82,
    tags: ['инструментальная', 'sky mubs', 'спокойная', 'оркестровая'],
    description: null,
  },
  {
    embedId: 'Dm95vTirBTI',
    score: 77,
    tags: ['инструментальная', 'sky mubs', 'спокойная', 'оркестровая'],
    description: null,
  },
  {
    embedId: 'MpSKn9URoCA',
    score: 84,
    tags: ['японская', 'метал', 'активная', 'ICCD'],
    description: null,
  },
  {
    embedId: 'o6wtDPVkKqI',
    score: 90,
    tags: ['японская', 'активная', 'жизнеутверждающая'],
    description: (
      <Description>
        Полезай в робота.
      </Description>
    ),
  },
  {
    embedId: 'xCkEsQXFv4g',
    score: 96,
    tags: ['русская', 'печальная', 'панк', 'элизиум', 'хочется петь'],
    description: (
      <Description>
        До слез... <Emoji src={PepeHands} />
      </Description>
    ),
  },
  {
    embedId: '59F9gY2OCO8',
    score: 80,
    tags: ['русская', 'король и шут', 'панк', 'активная', 'хочется петь'],
    description: null,
  },
  {
    embedId: 'QP0nAYAPAqM',
    score: 80,
    tags: ['русская', 'король и шут', 'панк', 'активная', 'хочется петь'],
    description: null,
  },
  {
    embedId: '_LNpvsoRgPY',
    score: 78,
    tags: ['русская', 'король и шут', 'панк', 'грустная', 'хочется петь'],
    description: null,
  },
  {
    embedId: 'dOAMvCyXXQo',
    score: 90,
    tags: ['японская', 'спокойная', 'жизнеутверждающая'],
    description: null,
  },
  {
    embedId: 'o1iz4L-5zkQ',
    score: 88,
    tags: ['японская', 'вокалоид', 'электронная', 'активная', 'жизнеутверждающая'],
    description: null,
  },
  {
    embedId: 'eMzsG9t66rE',
    score: 88,
    tags: ['японская', 'активная', 'жизнеутверждающая', 'рок'],
    description: null,
  },
  {
    embedId: 'az2Q7pjClYM',
    score: 80,
    tags: ['японская', 'активная', 'жизнеутверждающая', 'рок'],
    description: null,
  },
  {
    embedId: 'VJFNcHgQ4HM',
    score: 76,
    tags: ['инструментальная', 'активная', 'электронная', 'хардкор/спидкор'],
    description: null,
  },
  {
    embedId: 'GSMV-Rv7C1w',
    score: 82,
    tags: ['японская', 'активная', 'жизнеутверждающая'],
    description: null,
  },
  {
    embedId: 'WRQGQyrytYU',
    score: 80,
    tags: ['английская', 'nomy', 'рок', 'жизнеутверждающая'],
    description: null,
  },
  {
    embedId: 'P5QbkjnCvl4',
    score: 82,
    tags: ['английская', 'nomy', 'хочется петь', 'рок'],
    description: null,
  },
  {
    embedId: 'tvKWfgqzQmY',
    score: 86,
    tags: ['английская', 'nomy', 'хочется петь', 'рок'],
    description: null,
  },
  {
    embedId: 'bo7_D0s4fIc',
    score: 72,
    tags: ['русская', 'король и шут', 'панк', 'спокойная'],
    description: null,
  },
  {
    embedId: 'rIPOOoQxquE',
    score: 75,
    tags: ['инструментальная', 'активная', 'электронная', 'хардкор/спидкор'],
    description: null,
  },
  {
    embedId: 'Mq6xQHInaHI',
    score: 77,
    tags: ['английская', 'активная'],
    description: null,
  },
  {
    embedId: '1_D7kiOR9fA',
    score: 85,
    tags: ['японская', 'активная', 'жизнеутверждающая', 'рок'],
    description: null,
  },
  {
    embedId: '1iSTJYIXYao',
    score: 81,
    tags: ['английская', 'активная', 'рок'],
    description: null,
  },
  {
    embedId: 'XCBi5kCbeNg',
    score: 88,
    tags: ['инструментальная', 'спокойная', 'классическая'],
    description: null,
  },
  {
    embedId: 'EVSb3dFszH4',
    score: 82,
    tags: ['инструментальная', 'спокойная', 'классическая'],
    description: null,
  },
  {
    embedId: 'u_xyg_s7gUA',
    score: 90,
    tags: ['инструментальная', 'спокойная', 'жизнеутверждающая', 'классическая'],
    description: null,
  },
  {
    embedId: 'L_iSDqqhsBg',
    score: 88,
    tags: ['инструментальная', 'активная', 'электронная'],
    description: (
      <Description>
        Очень хорошо сделано!
      </Description>
    ),
  },
  {
    embedId: 'WIqrKvfEJos',
    score: 80,
    tags: ['японская', 'активная', 'жизнеутверждающая'],
    description: null,
  },
  {
    embedId: 'kTHNpusq654',
    score: 68,
    tags: ['английская', 'активная'],
    description: null,
  },
  {
    embedId: 'kZSmbObUzZA',
    score: 71,
    tags: ['активная', 'жизнеутверждающая'],
    description: null,
  },
  {
    embedId: '4CI3lhyNKfo',
    score: 62,
    tags: ['спокойная'],
    description: null,
  },
  {
    embedId: 'qrVSSTHXlAY',
    score: 57,
    tags: ['русская', 'спокойная'],
    description: null,
  },
  {
    embedId: '0gctXlUd9PQ',
    score: 70,
    tags: ['инструментальная', 'sky mubs', 'спокойная'],
    description: null,
  },
  {
    embedId: 'yHgIYfNF8kY',
    score: 80,
    tags: ['инструментальная', 'активная', 'электронная', 'хардкор/спидкор'],
    description: null,
  },
  {
    embedId: 'slVPS_VJqhs',
    score: 81,
    tags: ['японская', 'akatsuki records', 'активная', 'жизнеутверждающая'],
    description: null,
  },
  {
    embedId: 'lBasIGZC-JM',
    score: 78,
    tags: ['японская', 'активная', 'электронная'],
    description: null,
  },
  {
    embedId: 'wgBZylNg6U0',
    score: 70,
    tags: ['инструментальная', 'активная', 'электронная'],
    description: null,
  },
  {
    embedId: '9nqOgzyosU4',
    score: 85,
    tags: ['японская', 'спокойная'],
    description: null,
  },
  {
    embedId: 'shOhkzInW8s',
    score: 75,
    tags: ['инструментальная', 'активная', 'оркестровая'],
    description: null,
  },
  {
    embedId: 'WWGq-wlTLnk',
    score: 76,
    tags: ['русская', 'рок'],
    description: null,
  },
  {
    embedId: '61Elpj2DlnM',
    score: 78,
    tags: ['инструментальная', 'печальная', 'спокойная'],
    description: null,
  },
  {
    embedId: 'GMcWGqm4rOQ',
    score: 80,
    tags: ['японская', 'жизнеутверждающая', 'активная'],
    description: null,
  },
  {
    embedId: '92QCvMb6lx4',
    score: 80,
    tags: ['активная', 'love solfege'],
    description: null,
  },
  {
    embedId: '-3tMkLRbO3Y',
    score: 83,
    tags: ['русская', 'панк', 'активная', 'порнофильмы'],
    description: null,
  },
  {
    embedId: 'Cdsqx-djRH0',
    score: 81,
    tags: ['русская', 'рок', 'активная', 'жизнеутверждающая'],
    description: null,
  },
  {
    embedId: 'HMGetv40FkI',
    score: 79,
    tags: ['инструментальная', 'спокойная', 'классическая'],
    description: null,
  },
  {
    embedId: 'XhrRGi8PUHs',
    score: 85,
    tags: ['русская', 'егор летов', 'панк', 'спокойная', 'печальная'],
    description: null,
  },
  {
    embedId: 'osBPrU0k21s',
    score: 60,
    tags: ['русская', 'активная', 'жизнеутверждающая'],
    description: null,
  },
  {
    embedId: '4t5iAKrvzOs',
    score: 48,
    tags: ['русская'],
    description: null,
  },
  {
    embedId: 'Sv6dMFF_yts',
    score: 88,
    tags: ['английская', 'спокойная', 'спокойная', 'хочется петь'],
    description: null,
  },
  {
    embedId: 'X9Cb5nF92F4',
    score: 87,
    tags: ['японская', 'рок', 'активная', 'жизнеутверждающая'],
    description: null,
  },
  {
    embedId: 'cLBFxJmKsKg',
    score: 79,
    tags: ['английская', 'спокойная', 'печальная'],
    description: null,
  },
  {
    embedId: '0EX3tQWswj0',
    score: 82,
    tags: ['японская', 'спокойная'],
    description: null,
  },
  {
    embedId: '8_opWKYPnHs',
    score: 83,
    tags: ['английская', 'спокойная', 'печальная', 'хочется петь'],
    description: null,
  },
  {
    embedId: 'X6U_4DjgMao',
    score: 98,
    tags: ['английская', 'twilight force', 'рок', 'активная', 'жизнеутверждающая', 'хочется петь'],
    description: null,
  },
  {
    embedId: 'vZ-FJXQK554',
    score: 91,
    tags: ['английская', 'twilight force', 'рок', 'активная', 'жизнеутверждающая', 'хочется петь'],
    description: null,
  },
  {
    embedId: 't4TnTqH6E8M',
    score: 78,
    tags: ['русская', 'электронная'],
    description: null,
  },
  {
    embedId: 'VieIk9rjCos',
    score: 82,
    tags: ['инструментальная', 'mittsies', 'электронная'],
    description: null,
  },
  {
    embedId: 'K_7K7v2KGYU',
    score: 100,
    tags: ['инструментальная', 'mittsies', 'электронная', 'активная'],
    description: null,
  },
  {
    embedId: 'K_YbbAhRbIQ',
    score: 80,
    tags: ['инструментальная', 'mittsies', 'электронная'],
    description: null,
  },
  {
    embedId: 'aoP1KKlXbqI',
    score: 90,
    tags: ['инструментальная', 'mittsies', 'электронная'],
    description: null,
  },
  {
    embedId: 'EnDXGQmCz3U',
    score: 76,
    tags: ['инструментальная', 'mittsies', 'электронная'],
    description: null,
  },
  {
    embedId: '1vrEljMfXYo',
    score: 84,
    tags: ['английская', 'хочется петь', 'жизнеутверждающая', 'спокойная'],
    description: null,
  },
  {
    embedId: 'SA_hw59NECE',
    score: 70,
    tags: ['инструментальная', 'активная', 'электронная'],
    description: null,
  },
  {
    embedId: 'GQz2MexCJSQ',
    score: 82,
    tags: ['русская', 'элизиум', 'панк', 'хочется петь', 'активная'],
    description: null,
  },
  {
    embedId: 'gnqXfK-ESoY',
    score: 84,
    tags: ['русская', 'хочется петь', 'рок', 'жизнеутверждающая'],
    description: null,
  },
  {
    embedId: '5GbSKaFf8Uc',
    score: 87,
    tags: ['русская', 'панк', 'порнофильмы', 'печальная', 'хочется петь'],
    description: null,
  },
  {
    embedId: 'C056vtZdQKc',
    score: 79,
    tags: ['русская', 'элизиум', 'панк', 'хочется петь', 'жизнеутверждающая'],
    description: null,
  },
  {
    embedId: 'Wsi36xSl8yM',
    score: 81,
    tags: ['японская', 'вокалоид', 'активная', 'рок'],
    description: null,
  },
  {
    embedId: 'iFnLGhDSJpw',
    score: 78,
    tags: ['инструментальная', 'печальная', 'спокойная'],
    description: null,
  },
  {
    embedId: 'FxKtRmODwFk',
    score: 90,
    tags: ['русская', 'панк', 'порнофильмы', 'активная', 'хочется петь'],
    description: null,
  },
  {
    embedId: 'sAhvAuC8JJU',
    score: 89,
    tags: ['русская', 'панк', 'порнофильмы', 'активная', 'хочется петь'],
    description: null,
  },
  {
    embedId: 'MNmLn6a-jqw',
    score: 87,
    tags: ['английская', 'жизнеутверждающая', 'активная', 'хочется петь'],
    description: null,
  },
  {
    embedId: 'KrFX_NG3GS0',
    score: 89,
    tags: ['русская', 'электронная', 'хардкор/спидкор', 'хочется петь'],
    description: null,
  },
  {
    embedId: 'LPRO3EzMQv0',
    score: 91,
    tags: ['инструментальная', 'активная', 'жизнеутверждающая'],
    description: null,
  },
  {
    embedId: 'LpheaI374Ic',
    score: 50,
    tags: ['инструментальная', 'печальная', 'спокойная', 'классическая'],
    description: null,
  },
  {
    embedId: 'Voz24mnv7CI',
    score: 68,
    tags: ['активная'],
    description: null,
  },
  {
    embedId: 'iJ4f2UfLyoU',
    score: 72,
    tags: ['японская', 'активная', 'жизнеутверждающая'],
    description: null,
  },
  {
    embedId: 'GZLuk3SK-3k',
    score: 70,
    tags: ['русская', 'егор летов', 'панк', 'активная', 'печальная'],
    description: null,
  },
  {
    embedId: '7VAoZXwDSpw',
    score: 70,
    tags: ['японская', 'активная'],
    description: null,
  },
  {
    embedId: 'hEvLtFnbF7c',
    score: 68,
    tags: ['японская', 'активная'],
    description: null,
  },
  {
    embedId: '5kz1c1bvKMQ',
    score: 80,
    tags: ['японская', 'yuki kajiura', 'спокойная'],
    description: null,
  },
  {
    embedId: 'Lcr5Mc6dGxI',
    score: 89,
    tags: ['английская', 'рок', 'жизнеутверждающая', 'активная', 'twilight force'],
    description: null,
  },
  {
    embedId: 'O4irXQhgMqg',
    score: 77,
    tags: ['английская', 'печальная', 'спокойная', 'рок'],
    description: null,
  },
  {
    embedId: 'mTCESSzPZSw',
    score: 80,
    tags: ['японская', 'активная', 'жизнеутверждающая'],
    description: null,
  },
  {
    embedId: 'apRLsd4W6gM',
    score: 87,
    tags: ['японская', 'rigël theatre', 'спокойная', 'жизнеутверждающая', 'кельтская'],
    description: null,
  },
  {
    embedId: 'uifv1yxYcOU',
    score: 86,
    tags: ['японская', 'rigël theatre', 'спокойная', 'жизнеутверждающая'],
    description: null,
  },
  {
    embedId: 'm9RW5DYNrvU',
    score: 84,
    tags: ['инструментальная', 'rigël theatre', 'активная', 'жизнеутверждающая', 'кельтская'],
    description: null,
  },
  {
    embedId: 'bYjaufqKT6E',
    score: 89,
    tags: ['русская', 'егор летов', 'панк', 'печальная', 'спокойная', 'хочется петь'],
    description: null,
  },
  {
    embedId: 'bTkIdiG0QmQ',
    score: 78,
    tags: ['русская', 'егор летов', 'панк', 'печальная', 'спокойная'],
    description: null,
  },
  {
    embedId: 'jP9JIBG0SZ8',
    score: 81,
    tags: ['русская', 'егор летов', 'панк', 'печальная', 'спокойная'],
    description: null,
  },
  {
    embedId: '6CSTPhPrTuQ',
    score: 89,
    tags: ['русская', 'егор летов', 'панк', 'хочется петь', 'печальная', 'спокойная'],
    description: null,
  },
  {
    embedId: 'uXq_Le2Awxk',
    score: 87,
    tags: ['русская', 'элизиум', 'панк', 'хочется петь', 'печальная', 'активная'],
    description: null,
  },
  {
    embedId: 'Urjm6FwRy6g',
    score: 93,
    tags: ['русская', 'элизиум', 'панк', 'хочется петь'],
    description: null,
  },
  {
    embedId: 'mtegWEn8LT8',
    score: 91,
    tags: ['русская', 'элизиум', 'панк', 'хочется петь'],
    description: null,
  },
  {
    embedId: '250rS-RvwlU',
    score: 59,
    tags: ['инструментальная', 'phyxinon', 'спокойная', 'печальная'],
    description: null,
  },
  {
    embedId: 'RQzUQ291l_c',
    score: 82,
    tags: ['русская', 'панк', 'король и шут'],
    description: null,
  },
  {
    embedId: 'uyL37Ox5Qxs',
    score: 64,
    tags: ['инструментальная', 'активная'],
    description: null,
  },
  {
    embedId: 'V3OPDTwH9os',
    score: 86,
    tags: ['английская', 'активная', 'жизнеутверждающая'],
    description: null,
  },
  {
    embedId: 'RtTYQuO1j6w',
    score: 75,
    tags: ['японская', 'akatsuki records', 'жизнеутверждающая'],
    description: null,
  },
  {
    embedId: '3GSY_jRiOdw',
    score: 76,
    tags: ['японская', 'жизнеутверждающая', 'активная'],
    description: null,
  },
  {
    embedId: '5nwEfGzbRok',
    score: 65,
    tags: ['английская', 'рок', 'печальная'],
    description: null,
  },
  {
    embedId: 'Qh2yzh4VoMs',
    score: 69,
    tags: ['инструментальная', 'xi', 'спокойная'],
    description: null,
  },
  {
    embedId: '5jJU-pLjdzc',
    score: 73,
    tags: ['инструментальная', 'xi', 'электронная'],
    description: null,
  },
  {
    embedId: 'vatcanQQJvQ',
    score: 81,
    tags: ['инструментальная', 'xi', 'электронная', 'спокойная'],
    description: null,
  },
  {
    embedId: 'AQEv4xdRvGM',
    score: 80,
    tags: ['японская', 'метал', 'активная', 'ICCD'],
    description: null,
  },
  {
    embedId: 'LD3baPUqa2E',
    score: 88,
    tags: ['японская', 'метал', 'активная', 'ICCD'],
    description: null,
  },
];

export const videos = rawVideos
  .sort((a, b) => b.score - a.score)

const doesVideoMatchTags = (tags, video) => {
  const { "ⓘ": hasDescription, ...restTags } = tags;
  const { description, tags: videoTags } = video; 

  if ((description === null) === hasDescription) 
    return false;
  for (const [tagName, value] of Object.entries(restTags))
    if (!videoTags.includes(tagName) === value)
      return false;

  return true;
};
export const getVideosByTags = (tags) => videos.filter(video => doesVideoMatchTags(tags, video));
