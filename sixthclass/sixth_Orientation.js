import react, { Component } from "react";
import { createSwitchNavigator } from "react-navigation";
import six_OrientationPage from './six_Subjects';
import multiplierPage from './six_multip';
import six_fractionPage from './six_Frac';
import ratePage from './six_rate';
import algebraPage from './six_algebra';
import six_frac_opPage from './six_frac_op';
import six_multip_ebobPage from './six_multip_ebob'
import six_multip_mulPage from './six_multip_mul'
import six_multip_mulsPage from './six_multip_muls'
const six_Orientation = createSwitchNavigator({
    six_ori: {
        screen: six_OrientationPage,
    },
    multipliers: {
        screen: multiplierPage,
    },
    six_multip_mulsPages: {
        screen: six_multip_mulsPage,
    },
    six_multip_mulPages: {
        screen: six_multip_mulPage,
    },
    six_multip_ebobPages: {
        screen: six_multip_ebobPage,
    },

    six_fractions: {
        screen: six_fractionPage,
    },
    six_frac_opPages: {
        screen: six_frac_opPage,
    },
    rates: {
        screen: ratePage,
    },
    algebras: {
        screen: algebraPage,
    }
})
export default six_Orientation;
