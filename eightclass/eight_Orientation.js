import react, { Component } from "react";
import { createSwitchNavigator } from "react-navigation";
import Eight from "./eight_subjects";
import Power from "./power";
import Ebob_ekokPage from "./ebob_ekokPage";
import MultipPage from './multipsPage';
import PrimeFactabPage from "./tabs/multips_primeFactortabPage";
import PrimeFacTreetabPage from './tabs/primeFacTreetabPage';

//import Ebob_Ekok_PrimeTabPage from './tabs/ebob_ekok/ebob_ekok_primetabPage';
import Ebob_Ekok_PrimeTabPage from './subFolders/ebob_ekok/ebob_ekok_primePage';
import Ebob_ekok_primePageTYS from "./subFolders/ebob_ekok/ebob_ekok_primePageTYS";
//import EbobTabPage from './tabs/ebob_ekok/ebobtabPage';
import EbobTabPage from './subFolders/ebob_ekok/ebobPage';
import EbobPageTYS from "./subFolders/ebob_ekok/ebobPageTYS";
//import EkokTabPage from './tabs/ebob_ekok/ekoktabPage';
import EkokTabPage from './subFolders/ebob_ekok/ekokPage';
import EkokPageTYS from "./subFolders/ebob_ekok/ekokPageTYS";

import Pow_getpow from './subFolders/pow/pow_getpow';
import Pow_getpowTYS from './subFolders/pow/pow_getpowTYS';
import Choose from "./choose";
import Pow_BasictabPage from './tabs/pow/pow_basictabPage';
import Pow_findpowtabPage from './tabs/pow/pow_findpowtabPage';
import Pow_getpowtabPage from './tabs/pow/pow_getpowtabPage';
import Pow_showdecimal from './subFolders/pow/pow_showdecimal';
import Pow_showdecimalTYS from './subFolders/pow/pow_showdecimalTYS'

import { Multips_primeFactorPage } from "./subFolders/multips/multips_primeFactorPage";
import Multips_primeFactorPageTYS from "./subFolders/multips/multips_primeFactorPageTYS";
import PrimeFacTreePage from "./subFolders/prime/primeFacTreePage";
import primeFacTreePagesTYS from "./subFolders/prime/primeFacTreePageTYS";
import EbobPage from "./subFolders/ebob_ekok/ebobPage";
import EkokPage from "./subFolders/ebob_ekok/ekokPage";
import Pow_findpow from "./subFolders/pow/pow_findpow";
import Pow_findpowTYS from "./subFolders/pow/pow_findpowTYS";
import Pow_showscience from "./subFolders/pow/pow_showscience";
import Pow_showscienceTYS from "./subFolders/pow/pow_showscienceTYS"

const eight_Ori = createSwitchNavigator({
  Main_eight: {
    screen: Eight,
  },
  powers: {
    screen: Power,
  },
  ebob_ekokPages: {
    screen: Ebob_ekokPage,
  },
  chosess: {
    screen: Choose,
  },
  EbobPageTYSPages: {
    screen: EbobPageTYS,
  },
  EkokPageTYSPages: {
    screen: EkokPageTYS,
  },
  Ebob_ekok_primePageTYSPages: {
    screen: Ebob_ekok_primePageTYS,
  },
  MultipPages: {
    screen: MultipPage,
  },
  primeFacPages: {
    screen: Multips_primeFactorPage,
  },
  primeFacPagesTYS: {
    screen: Multips_primeFactorPageTYS,
  },
  primeFacTreePages: {
    screen: PrimeFacTreePage,
  },
  primeFacTreePagesTYS: {
    screen: primeFacTreePagesTYS,
  },
  Ebob_Ekok_PrimeTabPages: {
    screen: Ebob_Ekok_PrimeTabPage,
  },
  EbobPages: {
    screen: EbobPage,
  },
  EkokPages: {
    screen: EkokPage,
  },
  Pow_getpowTYSPages: {
    screen: Pow_getpowTYS,
  },
  Pow_getpowPages: {
    screen: Pow_getpow,
  },
  Pow_BasictabPages: {
    screen: Pow_BasictabPage,
  },
  Pow_findpowPages: {
    screen: Pow_findpow,
  },
  Pow_findpowPagesTYS: {
    screen: Pow_findpowTYS,
  },
  Pow_getpowPagesTYS: {
    screen: Pow_getpowtabPage,
  },
  Pow_showdecimalPages: {
    screen: Pow_showdecimal,
  },
  Pow_showdecimalTYSPages: {
    screen: Pow_showdecimalTYS,
  },
  Pow_showsciencePages: {
    screen: Pow_showscience,
  },
  Pow_showscienceTYSPages: {
    screen: Pow_showscienceTYS,
  }
})
export default eight_Ori;
