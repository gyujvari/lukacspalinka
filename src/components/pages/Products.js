import React from 'react';
import '../../App.css';
import {AnimatePresence, motion} from 'framer-motion/dist/framer-motion'


export default function Products() {
  return <motion.div  initial={{opacity:0}} animate={{ opacity:  1 }} transition={{duration:1}} className='products'>
    <h1>LUKÁCS PÁLINKA 1969</h1>
    <div className='about-us'>
      <div>
        <div className='text-top'>
        Lukács Attila - harmadik generációs „Csekefalvi pálinkafőzde” vezetője – a Lukács Pálinka  megalapítója.
        </div>
      </div>
      <div className='text-container'>
        <div className='text-left'>
        1969- ebben az évben kezdődött minden. Lukács János, a családi vállalkozás megalapítója, az én nagyapám egy egyszerű, sánta, falusi ember, a család feje volt. 1969-ben felkérték a Firtosmartonosi Láz-on fekvő pálinkafőzde vezetésére, ahol elsajátíthatta a pálinkafőzés rejtelmeit. Munkásságának és talpraesettségének köszönhetően, egyre többen bízták rá gyümölcseiket, hogy varázsoljon belőle jó ízű pálinkát. Akkoriban, mint minden ember, nagyapám is mezőgazdasággal foglalkozott, ezért a család ékszerdoboza lett a pálinkafőzde. Későbbiekben édesapám, Lukács Elek – a „Csekefalvi Pálinkafőzde” megalapítója – apja nyomdokaiba lépve, a Mérnöki Iskola elvégzése után, belekezdett a pálinka főzés tanulásába, rejtelmeibe, majd 1991-ben megépítette saját pálinkafőzdéjét Csekefalván. Édesapám 27 éven keresztűl vezette a pálinkafőzdét, folyamatosan fejlesztette, szépítgette azt. Évről-évre egyre többen fordultak és fordulnak hozzánk bizalommal, egyre több barátra tettünk szert az évek leforgása alatt. 
        </div>
        <div className='text-right'>
        Időközben én is elsajátítottam a szakmát, besegítettem a pálinka főzésébe és megértettem azt, hogy miért szerettek a felmenőim a pálinkafőzéssel foglalkozni. Csodálattal néztem a családias hangulatot, ami ki alakult munka közben, érdeklődve hallgattam a régi történeteket, amelyet a gazdák meséltek, míg főtt a pálinka. Így 2018-ban átvettem édesapámtól a pálinkafőzde vezetését, és viszem tovább a családunk örökségét, vállalkozását. Úgy éreztem nem szabad hagynom elveszni a családi vállalkozást, ezért úgy mint a nagytatám és az édesapám, hozzáadtam én is magamból egy darabot. Elterveztem, és megvalósítottam egy palackozó műhelyet illetve modernizáltam a pálinkafőzdét, több mint egy év kemény munkával, álmatlan éjszakákkal, létrehoztunk valami újat. Szeretném bemutatni önöknek, hogy honnan indultunk, meddig jutottunk.
        </div>
      </div>
      </div>
  </motion.div>;
}
