import react, { Component } from "react";
import { createSwitchNavigator } from "react-navigation";
import Eight from "./eight_subjects";
import Power from "./power";
import Ebob_ekokPage from "./ebob_ekokPage";
import MultipPage from './multipsPage';
import PrimeFactabPage from "./tabs/multips_primeFactortabPage";
import PrimeFacTreetabPage from './tabs/primeFacTreetabPage'
import Ebob_Ekok_PrimeTabPage from './tabs/ebob_ekok/ebob_ekok_primetabPage';
import EbobTabPage from './tabs/ebob_ekok/ebobtabPage';
import EkokTabPage from './tabs/ebob_ekok/ekoktabPage';
import Pow_BasictabPage from './tabs/pow/pow_basictabPage';
import Pow_findpowtabPage from './tabs/pow/pow_findpowtabPage';
import Pow_getpowtabPage from './tabs/pow/pow_getpowtabPage';
import Pow_showdecimaltabPage from './tabs/pow/pow_showdecimaltabPage';
import Pow_showsciencetabPage from './tabs/pow/pow_showsciencetabPage';

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
  multipPages: {
    screen: MultipPage,
  },
  primeFacPages: {
    screen: PrimeFactabPage,
  },
  primeFacTreePages: {
    screen: PrimeFacTreetabPage,
  },
  Ebob_Ekok_PrimeTabPages: {
    screen: Ebob_Ekok_PrimeTabPage,
  },
  EbobTabPages: {
    screen: EbobTabPage,
  },
  EkokTabPages: {
    screen: EkokTabPage,
  },
  Pow_BasictabPages: {
    screen: Pow_BasictabPage,
  },
  Pow_findpowtabPages: {
    screen: Pow_findpowtabPage,
  },
  Pow_getpowtabPages: {
    screen: Pow_getpowtabPage,
  },
  Pow_showdecimaltabPages: {
    screen: Pow_showdecimaltabPage,
  },
  Pow_showsciencetabPages: {
    screen: Pow_showsciencetabPage,
  },
})
export default eight_Ori;
