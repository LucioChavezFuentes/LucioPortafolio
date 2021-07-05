import React from 'react';
//images
/*import socialConejitoProject from 'assets/img/projects/Social-Conejito2.jpg';
import ravenousProject from 'assets/img/projects/ravenous.jpg';
import wanderlust from 'assets/img/projects/wanderlust.jpg';
import codigoAventura from 'assets/img/projects/codigoAventura_compressed.jpg';
import teaCozy from 'assets/img/projects/teaCozy.jpg';
import WorkNFlowScreenshot from 'assets/img/projects/WorkNFlow.jpg';*/

//logos
import Conejito from "assets/img/customIcons/Conejito";
import AdventureCode from "assets/img/customIcons/AdventureCode";
import Ravenous from "assets/img/customIcons/Ravenous";
import TeaCozy from "assets/img/customIcons/TeaCozy";
import WanderlustIcon from 'assets/img/customIcons/WanderlustIcon';
import WorkNFlow from "assets/img/customIcons/WorkNFlow";
import BBBic from "assets/img/customIcons/BBBic";

//Components
import SocialConejitoLink from 'components/ProjectButtonLinks/SocialConejitoLink';
import RavenousLink from 'components/ProjectButtonLinks/RavenousLink';
import CodigoAventuraLink from 'components/ProjectButtonLinks/CodigoAventuraLink';
import TeaCozyLink from 'components/ProjectButtonLinks/TeaCozyLink';
import WanderlustLink from 'components/ProjectButtonLinks/WanderlustLink';
import WorkNFlowLink from 'components/ProjectButtonLinks/WorkNFlowLink';
import BBBicLink from 'components/ProjectButtonLinks/BBBicLink';

//Buttons
import AdvCoSourceCodeLink from "components/CustomButtons/AdvCoSourceCodeLink";

//TODO: Find a way to use the costum IntlMessage component with formatjs' babel inserting id plugins without errors.
// Use the react-intl's FormattedMessage instead of a helper in order to compile without explicit ids and make the lang scripts work..for now
import { FormattedMessage } from 'react-intl';

import IntlMessage from 'helper/IntlMessages';

//thumbnails
import socialConejitoThumb from 'assets/img/projects/thumbs/Social-Conejito2-min.jpg';
import ravenousThumb from 'assets/img/projects/thumbs/ravenous-min.jpg';
import codigoAventuraThumb from 'assets/img/projects/thumbs/codigoAventura_compressed-min.jpg';
import teaCozyThumb from 'assets/img/projects/thumbs/teaCozy-min.jpg';
import wanderlustThumb from 'assets/img/projects/thumbs/wanderlust-min.jpg';
import WorkNFlowSThumb from 'assets/img/projects/thumbs/WorkNFlow-min.jpg';

const socialConejitoProject = require('assets/img/projects/compressed/Social-Conejito2-min.jpg');
const ravenousProject = require('assets/img/projects/compressed/ravenous-min.jpg');
const wanderlust = require('assets/img/projects/compressed/wanderlust-min.jpg');
const teaCozy = require('assets/img/projects/compressed/teaCozy-min.jpg');
const WorkNFlowScreenshot = require('assets/img/projects/compressed/WorkNFlow-min.jpg');
const codigoAventura = require('assets/img/projects/compressed/codigoAventura-min.jpg');


/*const socialConejitoProject = 'Social-Conejito2.jpg';
const ravenousProject = 'ravenous.jpg';
const wanderlust = 'wanderlust.jpg';
const codigoAventura = 'codigoAventura_compressed.jpg';
const teaCozy = 'teaCozy.jpg';
const WorkNFlowScreenshot = 'WorkNFlow.jpg';*/

const projectsById = {

  bbbic: {
    img: {
      src: "https://res.cloudinary.com/ddxlzqfid/image/upload/v1624640694/bbbic/public/BBBic_uazrns.jpg",
      thumb: "https://res.cloudinary.com/ddxlzqfid/image/upload/c_thumb,w_200,g_face/v1624640694/bbbic/public/BBBic_uazrns.jpg",
      alt: 'B&B Bicentenario'
    },

    title: "B&B Bicentenario",
    description: <FormattedMessage
    defaultMessage="B&B Bicentenario is a real estate website. This project is in its final stage of development and also includes its own CMS."
    description='bbbic-description'
     />,
     ButtonLink: <BBBicLink
     label={<FormattedMessage
       defaultMessage='Visit B&B Bicentenario'
       description="The visit label for B&B Bic's link button"
        />} />,
    logo: BBBic,
    id: 'bbbic',
    
  },

  workNFlow: {
    img: {
      src: WorkNFlowScreenshot,
      thumb: WorkNFlowSThumb,
      alt: 'Work-N-Flow',
    },
    title: 'Work & Flow',
    description: <FormattedMessage
      defaultMessage="Work & Flow is a personal task register which tracks how much time the user spends working, resting, and which tasks complete in workload intervals of 25 minutes."
      description='work-n-flow-description'
       />,
    ButtonLink: <WorkNFlowLink
      label={<FormattedMessage
        defaultMessage='Visit Work & Flow'
        description="The visit label for Work & Flow's link button"
         />} />,
    logo: WorkNFlow,
    id: 'workNFlow',
  },

  socialConejito: {
    img: {
      src: socialConejitoProject,
      thumb: socialConejitoThumb,
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
    logo: Conejito,
    id: 'socialConejito',
  },
  ravenous: {
    img: {
      src: ravenousProject,
      thumb: ravenousThumb,
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
      />} />,
    logo: Ravenous,
    id: 'ravenous'
  },
  wanderlust: {
    img: {
      src: wanderlust,
      thumb: wanderlustThumb,
      alt: 'Wanderlust',
    },
    title: 'Wanderlust',
    description: <IntlMessage
      defaultMessage="Wanderlust is a travel guide app where you can get a city or country's top attractions and weather forecast."
      description='wanderlust-description'
      id="wanderlust-description" />,
    ButtonLink: <WanderlustLink label={<IntlMessage
      defaultMessage='Visit Wanderlust'
      description="The visit label for wanderlust's link button"
      id='visit-label-wanderlust-button'
    />} />,
    logo: WanderlustIcon,
    id: 'wanderlust',
  },
  adventureCode: {
    img: {
      src: codigoAventura,
      thumb: codigoAventuraThumb,
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
    ButtonCode: AdvCoSourceCodeLink,
    logo: AdventureCode,
    id: 'adventureCode',
  },
  teaCozy: {
    img: {
      src: teaCozy,
      thumb: teaCozyThumb,
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
    logo: TeaCozy,
    id: 'teaCozy'
  }
}

export const projectIds = ['bbbic', 'socialConejito', 'workNFlow', 'ravenous', 'adventureCode', 'wanderlust', 'teaCozy'];

export const arrayOfProjects = projectIds.map(id => projectsById[id])

export default projectsById