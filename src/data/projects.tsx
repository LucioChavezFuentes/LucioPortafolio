import React from 'react';
//images
import socialConejitoProject from 'assets/img/projects/Social-Conejito2.jpg';
import ravenousProject from 'assets/img/projects/ravenous.jpg';
import wanderlust from 'assets/img/projects/wanderlust.jpg';
import codigoAventura from 'assets/img/projects/codigoAventura.jpg';
import teaCozy from 'assets/img/projects/teaCozy.jpg';


//Components
import SocialConejitoLink from 'components/ProjectButtonLinks/SocialConejitoLink';
import RavenousLink from 'components/ProjectButtonLinks/RavenousLink';
import CodigoAventuraLink from 'components/ProjectButtonLinks/CodigoAventuraLink';
import TeaCozyLink from 'components/ProjectButtonLinks/TeaCozyLink';
import WanderlustLink from 'components/ProjectButtonLinks/WanderlustLink';

import IntlMessage from 'helper/IntlMessages';

const projectsById = {
  socialConejito: {
    img: {
      src: socialConejitoProject,
      alt: 'The Social Conejito',
    },
    title: 'The Social Conejito',
    description: <IntlMessage
      defaultMessage="The Social Conejito is a social network composed of short messages named 'Squeals or Screams' for user expression where everyone can see, like and comment."
      description='the-social-conejito-description'
      id="the-social-conejito-description" />,
    ButtonLink: <SocialConejitoLink
      label={<IntlMessage
        defaultMessage='Visit Social Conejito'
        description="The visit label for social conejito's link button"
                id='visit-label-conejito-button' />} />,
        id: 'socialConejito',
  },
  ravenous: {
    img: {
      src: ravenousProject,
      alt: 'Ravenous'
    },
    title: 'Ravenous',
    description: <IntlMessage
      defaultMessage="Ravenous searches for restaurants in a city or country with a given type of food."
      description='ravenous-description'
      id="ravenous-description" />,
    ButtonLink: <RavenousLink
      
      label={<IntlMessage
        defaultMessage='Visit Ravenous'
        description="The visit label for ravenous's link button"
        id='visit-label-ravenous-button'
            />}/>,
        id: 'ravenous'
  },
  wanderlust: {
    img: {
      src: wanderlust,
      alt: 'Wanderlust',
    },
    title: 'Wanderlust',
    description: <IntlMessage
      defaultMessage="Wanderlust is travel guide app where you get a city's or country's top attractions and weather forecast."
      description='wanderlust-description'
      id="wanderlust-description" />,
    ButtonLink: <WanderlustLink label={<IntlMessage
      defaultMessage='Visit Wanderlust'
      description="The visit label for wanderlust's link button"
      id='visit-label-wanderlust-button'
        />} />,

    id: 'wanderlust',
  },
  adventureCode: {
    img: {
      src: codigoAventura,
      alt: 'Adventure Code'
    },
    title: <IntlMessage
      defaultMessage='Adventure Code'
      description='adventure-code-title'
      id="adventure-code-title"
    />,
    description: <IntlMessage
      defaultMessage="Adventure Code is an online Code Editor where everyone, who register, can write code and evaluate the output."
      description='adventure-code-description'
      id="adventure-code-description" />,
    ButtonLink: <CodigoAventuraLink label={<IntlMessage
      defaultMessage='Visit Adventure Code'
      description="The visit label for adventure code's link button"
      id='visit-label-adventure-code-button'
        />} />,

    id: 'adventureCode',
  },
  teaCozy: {
    img: {
      src: teaCozy,
      alt: 'Tea Cozy',
    },
    title: 'Tea Cozy',
    description: <IntlMessage
      defaultMessage='A lovely web page designed for a tea/coffee shop.'
      description='tea-cozy-description'
      id='tea-cozy-description' />,
    ButtonLink: <TeaCozyLink 
      label={<IntlMessage
      defaultMessage='Visit Tea Cozy'
      description="The visit label for tea cozy's link button"
      id='visit-label-tea-cozy-button'
        />} />,
        id: 'teaCozy'
  }
}

export const projectIds = ['socialConejito', 'ravenous', 'adventureCode', 'wanderlust', 'teaCozy'];

export const arrayOfProjects = projectIds.map(id => projectsById[id])

export default projectsById