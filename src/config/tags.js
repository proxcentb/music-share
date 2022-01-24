import { Emoji, Description, getRandomColor } from './helpers';
import FeelsAmazingMan from '../assets/emojis/FeelsAmazingMan.png';
import FeelsHangMan from '../assets/emojis/FeelsHangMan.png';
import FeelsOkayMan from '../assets/emojis/FeelsOkayMan.png';
import SwoleDoge from '../assets/emojis/SwoleDoge.png';
import AYAYA from '../assets/emojis/AYAYA.png';
import wojakWithered from '../assets/emojis/wojakWithered.png';
import ChadYes from '../assets/emojis/ChadYes.png';
import EZY from '../assets/emojis/EZY.png';
import monkaMEGA from '../assets/emojis/monkaMEGA.png';
import roflanEbalo from '../assets/emojis/roflanEbalo.png';
import peepoGlad from '../assets/emojis/peepoGlad.png';
import TrollDespair from '../assets/emojis/TrollDespair.png';
import Trollge from '../assets/emojis/Trollge.png';

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

const rawTags = [
  {
    id: 'ⓘ',
    description: (
      <Description>
        У этих видео я оставил небольшие заметки.
      </Description>
    ),
  },
  {
    id: 'инструментальная',
    description: (
      <Description>
        Музыка без слов или акцент на них очень мал. Таких у меня много.
      </Description>
    ),
  },
  {
    id: 'японская',
    description: (
      <Description>
        Музыка с японскими словами, чаще всего из аниме или osu! узнал, но не всегда.
      </Description>
    ),
  },
  {
    id: 'английская',
    description: (
      <Description>
        Музыка с английскими словами, чаще всего просто случайно натыкаюсь на нее.
      </Description>
    ),
  },
  {
    id: 'русская',
    description: (
      <Description>
        Музыка с русскими словами, не так давно начал находить крутые песни.
      </Description>
    ),
  },
  {
    id: 'караоке',
    description: (
      <Description>
        С друзьями иногда в караоке ходим, это подборка для меня. <br /> <Emoji src={FeelsAmazingMan} />
      </Description>
    ),
  },
  {
    id: 'грустная',
    description: (
      <Description>
        Усугубляет тоску... <br /> <Emoji src={FeelsHangMan} />
      </Description>
    ),
  },
  {
    id: 'веселая',
    description: (
      <Description>
        Поднимает настроение! <br /> <Emoji src={FeelsOkayMan} />
      </Description>
    ),
  },
  {
    id: 'спокойная',
    description: (
      <Description>
        Нередко охота послушать что-то спокойное, чтобы расслабиться.
      </Description>
    ),
  },
  {
    id: 'активная',
    description: (
      <Description>
        Часто хочется слушать подобное; больше энергии появляется! <br /> <Emoji src={SwoleDoge} />
      </Description>
    ),
  },
  {
    id: 'вокалоид',
    description: (
      <Description>
        Песенки миленькие, как и персонажи. <br /> <Emoji src={AYAYA} />
      </Description>
    ),
  },
  {
    id: 'рок',
    description: (
      <Description>
        Рок. Много рока.
      </Description>
    ),
  },
  {
    id: 'панк',
    description: (
      <Description>
        Друг подсадил... <br /> <Emoji src={wojakWithered} />
      </Description>
    ),
  },
  {
    id: 'метал',
    description: (
      <Description>
        Мало таких треков, в основном это мелодичный метал.
      </Description>
    ),
  },
  {
    id: 'электронная',
    description: (
      <Description>
        Скорее всего долбежка. <br /> <Emoji src={ChadYes} />
      </Description>
    ),
  },
  {
    id: 'хардкор/спидкор',
    description: (
      <Description>
        Скорее всего <b>нереальная</b> долбежка. <br /> <Emoji src={ChadYes} />
      </Description>
    ),
  },
  {
    id: 'кельтская',
    description: (
      <Description>
        Скрипка, флейта, барабаны, волынка, арфа... Очень приятно для слуха. <br /> <Emoji src={FeelsOkayMan} />
      </Description>
    ),
  },
  {
    id: 'оркестровая',
    description: (
      <Description>
        В основном эпическая. 
      </Description>
    ),
  },
  {
    id: 'классическая',
    description: (
      <Description>
        Здесь я имею ввиду не только классику, но и музыку, похожую на нее. <br /> <Emoji src={EZY} />
      </Description>
    ),
  },
  {
    id: 'xi',
    description: (
      <Description>
        Автор электронной музыки, очень нравится его стиль, узнал из osu! о нем.
      </Description>
    ),
  },
  {
    id: 'ICCD',
    description: (
      <Description>
        Imperial Circus Dead Decadence. Метал группа. <br /> <Emoji src={monkaMEGA} />
      </Description>
    ),
  },
  {
    id: 'akatsuki records',
    description: (
      <Description>
        Японская группа, необычный голос у вокалистки. <br /> <Emoji src={roflanEbalo} />
      </Description>
    ),
  },
  {
    id: 'phyxinon',
    description: (
      <Description>
        Чел круто на фортепиано играет!
      </Description>
    ),
  },
  {
    id: 'kalafina',
    description: (
      <Description>
        Уже распавшаяся японская группа, основанная Юки Кадзиурой. Очень много их треков мне нравится.
      </Description>
    ),
  },
  {
    id: 'love solfege',
    description: (
      <Description>
        Уникальный стиль. Очень круто! <br /> <Emoji src={peepoGlad} />
      </Description>
    ),
  },
  {
    id: 'yousei teikoku',
    description: (
      <Description>
        Японский рок.
      </Description>
    ),
  },
  {
    id: 'yuki kajiura',
    description: (
      <Description>
        Музыкант и композитор, много ее треков мне нравятся.
      </Description>
    ),
  },
  {
    id: 'nomy',
    description: (
      <Description>
        Группа, состоящая из одного человека.
      </Description>
    ),
  },
  {
    id: 'rigël theatre',
    description: (
      <Description>
        Очень приятный голос и мелодия! Одна из моих самых любимых групп.
      </Description>
    ),
  },
  {
    id: 'wagakki band',
    description: (
      <Description>
        Японский фолк-рок.
      </Description>
    ),
  },
  {
    id: 'sky mubs',
    description: (
      <Description>
        Композитор, создающий эпичную музыку.
      </Description>
    ),
  },
  {
    id: 'infected mushrooms',
    description: (
      <Description>
        Необычное звучание в их треках, запоминается!
      </Description>
    ),
  },
  {
    id: 'элизиум',
    description: (
      <Description>
        Русская панк-рок группа, очень много крутых треков.
      </Description>
    ),
  },
  {
    id: 'король и шут',
    description: (
      <Description>
        <Emoji src={Trollge} />
      </Description>
    ),
  },
  {
    id: 'егор летов',
    description: (
      <Description>
        <Emoji src={TrollDespair} />
      </Description>
    ),
  },
  {
    id: 'twilight force',
    description: (
      <Description>
        Очень приятная рок музыка!
      </Description>
    ),
  },
  {
    id: 'mittsies',
    description: (
      <Description>
        Узнал из Helltaker о нем, очень хорошая электронная музыка! 
      </Description>
    ),
  },
  {
    id: 'порнофильмы',
    description: (
      <Description>
        Русская панк-рок группа, очень много крутых треков.
      </Description>
    ),
  },
];

export const exampleTags = [
  {
    id: 'активное',
    tagState: true,
    description: (
        <Description>
          Только видео с этим тегом будут появляться.
        </Description>
    ),
  },
  {
    id: 'неактивное',
    tagState: false,
    description: (
        <Description>
          Все видео с такими тегом не будут появляться.
        </Description>
    ),
  },
  {
    id: 'нейтральное',
    description: (
        <Description>
          Изначальное состояние, не влияет на что-либо.
        </Description>
    ),
  },
].map(getModifiedTag);

export const tags = rawTags.map(getModifiedTag);

export const allTagsIds = tags.map(tag => tag.id);
export const getTagById = id => tags.find(tag => tag.id === id);
