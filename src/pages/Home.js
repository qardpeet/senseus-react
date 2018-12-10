import React, { Component } from 'react';
import LanguageSelectionHeader from '../components/LanguageSelectionHeader';
import ProgressBar from '../components/ProgressBar';
import PetitionAction from '../components/PetitionAction';
import BulletPoint from '../components/BulletPoint';

import havingFunIMG from '../assets/img/having-fun.png';
import codingIMG from '../assets/img/coding.png';
import makingArtIMG from '../assets/img/making-art.png';

export default class Home extends Component {
    render() {
        return (
            <>
                <LanguageSelectionHeader />
                <ProgressBar progress="19%" />
                <div className="container">
                    <PetitionAction />
                    <div className="bulletpoint">
                        <BulletPoint
                            imgSrc={havingFunIMG}
                            description="შუშისა შესულიყო დაეძინათ იმეორებს მოგყვათ გაუჭრიათო სათითაოდ სიმარტოვე აზიისკენ ჯგუფზე. აზიისკენ უძლებდნენ მიუსაჯეს დაბზრიალდა ჰენდრიქსზეო გაცლა. კაცუნები გაცლა მოგყვათ დასაწიოკებლად უძლებდნენ აზიისკენ უყურონ,"
                        />
                        <BulletPoint
                            imgSrc={codingIMG}
                            description="შუშისა შესულიყო დაეძინათ იმეორებს მოგყვათ გაუჭრიათო სათითაოდ სიმარტოვე აზიისკენ ჯგუფზე. აზიისკენ უძლებდნენ მიუსაჯეს დაბზრიალდა ჰენდრიქსზეო გაცლა. კაცუნები გაცლა მოგყვათ დასაწიოკებლად უძლებდნენ აზიისკენ უყურონ,"
                        />
                        <BulletPoint
                            imgSrc={makingArtIMG}
                            description="შუშისა შესულიყო დაეძინათ იმეორებს მოგყვათ გაუჭრიათო სათითაოდ სიმარტოვე აზიისკენ ჯგუფზე. აზიისკენ უძლებდნენ მიუსაჯეს დაბზრიალდა ჰენდრიქსზეო გაცლა. კაცუნები გაცლა მოგყვათ დასაწიოკებლად უძლებდნენ აზიისკენ უყურონ,"
                        />
                    </div>
                </div>
            </>
        );
    }
}
