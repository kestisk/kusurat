import react, { Component } from 'react';
import { createSwitchNavigator } from 'react-navigation';
import Five from './five_Subjects';
import five_fractionPage from './fraction';
import Five_Area from './area';
import Five_triangl from './fifth_area_triangl';
import Five_square from './fifth_area_square';
import Five_rectangl from './fifth_area_rectangl';
import Five_frac_simple from './Five_frac_simple';
import Five_frac_addsub from './Five_frac_addsub';
import Five_Decimal from './five_decimal';
import five_decfrac_decFragComaPage from './Five_decfrac_decFragComa';
import Five_dec_addsub from './Five_dec_addsub';
const fifth_Orientation = createSwitchNavigator({
    Mainfive: {
        screen: Five,
    },
    Five_fractionPages: {
        screen: five_fractionPage,
    },
    Five_Areas: {
        screen: Five_Area,
    },
    Five_area_triangls: {
        screen: Five_triangl,
    },
    Five_area_squares: {
        screen: Five_square,
    },
    Five_area_rectangls: {
        screen: Five_rectangl,
    },
    Five_frac_simples: {
        screen: Five_frac_simple,
    },
    Five_frac_addsubs: {
        screen: Five_frac_addsub,
    },
    Five_Decimals: {
        screen: Five_Decimal,
    },
    Five_decfrac_decFragComaPages: {
        screen: five_decfrac_decFragComaPage,
    },
    Five_dec_addsubs: {
        screen: Five_dec_addsub,
    }

})

export default fifth_Orientation;