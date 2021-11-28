import { Emoji, Description } from './helpers';

const rawTags = [
  {
    name: 'ⓘ',
    description: (
      <Description>
        У этих видео я оставил небольшие заметки.
      </Description>
    ),
  },
  {
    name: 'инструментальная',
    description: (
      <Description>
        Музыка без слов или акцент на них очень мал. Таких у меня много.
      </Description>
    ),
  },
  {
    name: 'японская',
    description: (
      <Description>
        Музыка с японскими словами, чаще всего из аниме или osu! узнал, но не всегда.
      </Description>
    ),
  },
  {
    name: 'английская',
    description: (
      <Description>
        Музыка с английскими словами, чаще всего просто случайно натыкаюсь на нее.
      </Description>
    ),
  },
  {
    name: 'русская',
    description: (
      <Description>
        Музыка с русскими словами, не так давно начал находить крутые песни.
      </Description>
    ),
  },
  {
    name: 'хочется петь',
    description: (
      <Description>
        С друзьями иногда в караоке ходим, это подборка для меня. <Emoji name="FeelsAmazingMan" />
      </Description>
    ),
  },
  {
    name: 'печальная',
    description: (
      <Description>
        Усугубляет тоску... <Emoji name="FeelsHangMan" />
      </Description>
    ),
  },
  {
    name: 'жизнеутверждающая',
    description: (
      <Description>
        Поднимает настроение! <Emoji name="FeelsOkayMan" />
      </Description>
    ),
  },
  {
    name: 'спокойная',
    description: (
      <Description>
        Нередко охота послушать что-то спокойное, чтобы расслабиться.
      </Description>
    ),
  },
  {
    name: 'активная',
    description: (
      <Description>
        Часто хочется слушать подобное; больше энергии появляется! <Emoji name="SwoleDoge" />
      </Description>
    ),
  },
  {
    name: 'вокалоид',
    description: (
      <Description>
        Песенки миленькие, как и персонажи. <Emoji name="AYAYA" />
      </Description>
    ),
  },
  {
    name: 'рок',
    description: (
      <Description>
        Рок. Много рока.
      </Description>
    ),
  },
  {
    name: 'панк',
    description: (
      <Description>
        Друг подсадил... <Emoji name="wojakWithered" />
      </Description>
    ),
  },
  {
    name: 'метал',
    description: (
      <Description>
        Мало таких треков, в основном это мелодичный метал.
      </Description>
    ),
  },
  {
    name: 'электронная',
    description: (
      <Description>
        Скорее всего долбежка. <Emoji name="ChadYes" />
      </Description>
    ),
  },
  {
    name: 'хардкор/спидкор',
    description: (
      <Description>
        Скорее всего <b>нереальная</b> долбежка. <Emoji name="ChadYes" />
      </Description>
    ),
  },
  {
    name: 'кельтская',
    description: (
      <Description>
        Скрипка, флейта, барабаны, волынка, арфа... Очень приятно для слуха. <Emoji name="FeelsOkayMan" />
      </Description>
    ),
  },
  {
    name: 'оркестровая',
    description: (
      <Description>
        В основном эпическая. 
      </Description>
    ),
  },
  {
    name: 'классическая',
    description: (
      <Description>
        Здесь я имею ввиду не только классику, но и музыку, похожую на нее. <Emoji name="EZY" />
      </Description>
    ),
  },
  {
    name: 'xi',
    description: (
      <Description>
        Автор электронной музыки, очень нравится его стиль, узнал из osu! о нем.
      </Description>
    ),
  },
  {
    name: 'ICCD',
    description: (
      <Description>
        Imperial Circus Dead Decadence. Метал группа. <Emoji name="monkaMEGA" />
      </Description>
    ),
  },
  {
    name: 'akatsuki records',
    description: (
      <Description>
        Японская группа, необычный голос у вокалистки. <Emoji name="roflanEbalo" />
      </Description>
    ),
  },
  {
    name: 'phyxinon',
    description: (
      <Description>
        Чел круто на фортепиано играет!
      </Description>
    ),
  },
  {
    name: 'kalafina',
    description: (
      <Description>
        Уже распавшаяся японская группа, основанная Юки Кадзиурой. Очень много их треков мне нравится.
      </Description>
    ),
  },
  {
    name: 'love solfege',
    description: (
      <Description>
        Уникальный стиль. Очень круто! <Emoji name="peepoGlad" />
      </Description>
    ),
  },
  {
    name: 'yousei teikoku',
    description: (
      <Description>
        Японский рок.
      </Description>
    ),
  },
  {
    name: 'yuki kajiura',
    description: (
      <Description>
        Музыкант и композитор, много ее треков мне нравятся.
      </Description>
    ),
  },
  {
    name: 'nomy',
    description: (
      <Description>
        Группа, состоящая из одного человека.
      </Description>
    ),
  },
  {
    name: 'rigël theatre',
    description: (
      <Description>
        Очень приятный голос и мелодия! Одна из моих самых любимых групп.
      </Description>
    ),
  },
  {
    name: 'wagakki band',
    description: (
      <Description>
        Японский фолк-рок.
      </Description>
    ),
  },
  {
    name: 'sky mubs',
    description: (
      <Description>
        Композитор, создающий эпичную музыку.
      </Description>
    ),
  },
  {
    name: 'infected mushrooms',
    description: (
      <Description>
        Необычное звучание в их треках, запоминается!
      </Description>
    ),
  },
  {
    name: 'элизиум',
    description: (
      <Description>
        Русская панк-рок группа, очень много крутых треков.
      </Description>
    ),
  },
  {
    name: 'король и шут',
    description: (
      <Description>
        Классика. <Emoji name="TrollDespair" />
      </Description>
    ),
  },
  {
    name: 'егор летов',
    description: (
      <Description>
        Классика, сам пою... <Emoji name="TrollDespair" />
      </Description>
    ),
  },
  {
    name: 'twilight force',
    description: (
      <Description>
        Очень приятная рок музыка!
      </Description>
    ),
  },
  {
    name: 'mittsies',
    description: (
      <Description>
        Узнал из Helltaker о нем, очень хорошая электронная музыка! 
      </Description>
    ),
  },
  {
    name: 'порнофильмы',
    description: (
      <Description>
        Русская панк-рок группа, очень много крутых треков.
      </Description>
    ),
  },
];

const random = (() => {
  let counter = 1;
  return () => (Math.cos(++counter * 17) + Math.sin(++counter * 4) + 2) / 4;
})()

const getRandomColor = () => `rgb(${[random(), random(), random()].map(v => Math.floor(v * 175 + 40)).join(', ')})`;

export const getModifiedTag = (tag) => {
  const { color, ...restProps } = tag;
  return {
    ...restProps,
    style: restProps.style ?? {
      color: 'white',
      backgroundColor: getRandomColor(),
    },
  };
}

export const tags = rawTags.map(getModifiedTag);
export const tagNames = tags.map(tag => tag.name);
export const getTagByName = (tagName) => tags.find(tag => tag.name === tagName);
