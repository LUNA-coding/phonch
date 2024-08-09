import React, {useState} from 'react';
import {Text, Touchable, TouchableOpacity, View} from 'react-native';

import Change from '../../../assets/icons/autorenew.svg';
import Account from '../../../assets/icons/account_circle.svg';

import {styles} from './style';
import {AppColor} from '../../global';

export default function Home(): React.JSX.Element {
  const [rank, setRank] = useState("Today's");

  return (
    <>
      <View style={styles.ranking}>
        <View style={styles.rankingTitle}>
          {/* total / today rank change button */}
          <TouchableOpacity>
            <Change width={28} height={28} fill={AppColor.brand_white} />
          </TouchableOpacity>
          <Text style={styles.rankingTitleText}>{rank} Ranking</Text>
          <TouchableOpacity>
            <Account width={28} height={28} fill={AppColor.brand_white} />
          </TouchableOpacity>
        </View>
        <Text>asdfasdf</Text>
      </View>
      <View style={styles.boxing}>
        <Text>asdfasdf</Text>
      </View>
    </>
  );
}
