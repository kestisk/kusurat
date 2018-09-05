import React, { Component } from 'react';
import { createSwitchNavigator } from 'react-navigation';
import stepAnalysisPage from './stepAnalysisPage';
import Four from './four_subjects';
import naturalNumPage from './naturalNumPage';
import four_step_analysisPage from './four_step_analysis';
import four_step_readNumberPage from './four_step_readNumber';
import four_step_stepValuePage from './four_step_stepValue';
import RollingNumberPage from "./rollingNumber";
import four_roll_closeTenPage from './four_roll_closeTen';
import Four_Roll_TabPage from "./four_roll_tab"
import measurePage from './measure';
import fractionPage from './fraction';
import decimalFracPage from './decimalFrac';
import logicalPage from './logical';
import patternPage from './pattern';
import rankingPage from './ranking';
import four_prob_isProbPage from './four_prob_isProb';
import four_pattern_numPatternPage from './numPattern';
import probabilityPage from './probability';
import four_natural_addPage from './four_natural_addPage';
import four_natural_mulPage from './four_natural_mulPage';
import four_natural_divPage from './four_natural_divPage';
import four_natural_subPage from './four_natural_subPage';
import four_frac_namedFracPage from './four_frac_named';
import four_frac_showInQuePage from './four_frac_showInQue';
import four_frac_rankingFracPage from './four_frac_rankingFrac';
import four_frac_subFracPage from './four_frac_subFrac';
import four_decfrac_decFargRankingPage from './four_decfrac_decFargRanking';
import four_decfrac_decFragComeandCompPage from './four_decfrac_decFragComeandComp';
import four_decfrac_decFragComaPage from './four_decfrac_decFragComa';
import four_logic_addlogicPage from './four_logic_addlogic';
import four_logic_addOpinPage from './four_logic_addOpin';
import four_logic_sublogicPage from './four_logic_sublogic';
import four_logic_subOpinPage from './four_logic_subOpin';
import four_logic_mullogicPage from './four_logic_mullogic';
import four_logic_mulOpinPage from './four_logic_mulOpin';
import four_logic_divlogicPage from './four_logic_divlogic';
import four_logic_divOpinPage from './four_logic_divOpin';

import four_measure_MKAnewsPage from './four_measure_MKAnews'
import four_measure_metrePage from './four_measure_metre'
import four_measure_timePage from './four_measure_time'
import four_measure_dayPage from './four_measure_day'
import four_measure_gramPage from './four_measure_gram'
import four_measure_longPage from './four_measure_long'
const four_Orientation = createSwitchNavigator({
    MainFour_Orientation: {
        screen: Four,
    },
    four_measure_MKAnewsPages: {
        screen: four_measure_MKAnewsPage,
    },
    four_measure_metrePages: {
        screen: four_measure_metrePage,
    },
    four_measure_timePages: {
        screen: four_measure_timePage,
    },
    four_measure_dayPages: {
        screen: four_measure_dayPage,
    },
    four_measure_gramPages: {
        screen: four_measure_gramPage,
    },
    four_measure_longPages: {
        screen: four_measure_longPage,
    },

    four_decfrac_decFragComaPages: {
        screen: four_decfrac_decFragComaPage,
    },
    four_decfrac_decFragComeandCompPages: {
        screen: four_decfrac_decFragComeandCompPage,
    },
    four_decfrac_decFargRankingPages: {
        screen: four_decfrac_decFargRankingPage,
    },
    four_logic_addlogicPages: {
        screen: four_logic_addlogicPage,
    },
    four_logic_addOpinPages: {
        screen: four_logic_addOpinPage,
    },
    four_logic_sublogicPages: {
        screen: four_logic_sublogicPage,
    },
    four_logic_subOpinPages: {
        screen: four_logic_subOpinPage,
    },
    four_logic_mullogicPages: {
        screen: four_logic_mullogicPage,
    },
    four_logic_mulOpinPages: {
        screen: four_logic_mulOpinPage,
    },
    four_logic_divlogicPages: {
        screen: four_logic_divlogicPage,
    },
    four_logic_divOpinPages: {
        screen: four_logic_divOpinPage,
    },
    four_frac_namedFracPages: {
        screen: four_frac_namedFracPage,
    },
    four_frac_showInQuePages: {
        screen: four_frac_showInQuePage,
    },
    four_frac_rankingFracPages: {
        screen: four_frac_rankingFracPage,
    },
    four_frac_subFracPages: {
        screen: four_frac_subFracPage,
    },
    four_prob_isProbs: {
        screen: four_prob_isProbPage,
    },
    probPage: {
        screen: probabilityPage,
    },
    four_natural_add: {
        screen: four_natural_addPage
    },
    four_natural_sub: {
        screen: four_natural_subPage
    },
    four_natural_mul: {
        screen: four_natural_mulPage
    },
    four_natural_div: {
        screen: four_natural_divPage
    },
    stepAnalysisPages: {
        screen: stepAnalysisPage,
    },
    naturalNumPages: {
        screen: naturalNumPage,
    },
    four_step_analysisPages: {
        screen: four_step_analysisPage,
    },
    four_step_readNumberPages: {
        screen: four_step_readNumberPage,
    },
    four_step_stepValuePages: {
        screen: four_step_stepValuePage,
    },
    rollingNumberPages: {

        screen: Four_Roll_TabPage,

    },
    four_roll_closeTenPages: {
        screen: four_roll_closeTenPage,
    },
    measurePages: {
        screen: measurePage,
    },
    fractionPages: {
        screen: fractionPage,
    },
    decimalFracPages: {
        screen: decimalFracPage,
    },
    logicalPages: {
        screen: logicalPage,
    },
    patternPages: {
        screen: patternPage,
    },
    rankingPages: {
        screen: rankingPage,
    },
    numPatternPages: {
        screen: four_pattern_numPatternPage,
    }

})
export default four_Orientation;