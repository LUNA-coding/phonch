import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import Change from '../../../assets/icons/autorenew.svg';
import Account from '../../../assets/icons/account_circle.svg';

import {styles} from './style';
import {AppColor} from '../../global';

export function ResultBox(): React.JSX.Element {
  const styles = StyleSheet.create({
    result: {
      flex: 0,
      padding: 8,
      borderRadius: 12,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: '#575757',
    },
    rank: {
      fontSize: 14,
      fontFamily: 'SUIT-ExtraBold',
      color: AppColor.brand_white,
    },
    name: {
      fontSize: 16,
      fontFamily: 'SUIT-SemiBold',
      color: AppColor.brand_white,
    },
    sizedBox: {
      width: 8,
      height: 8,
    },

    fill: {
      flex: 1,
    },
  });

  return (
    <View style={styles.result}>
      <Text style={styles.rank}>#1</Text>
      <View style={styles.sizedBox} />
      <Text style={styles.name}>hayward_kim</Text>
      <View style={styles.fill} />
      <View>
        {/* image */}
        <Text>186</Text>
      </View>
    </View>
  );
}

export default function Home(): React.JSX.Element {
  const [rank, setRank] = useState("Today's");

  return (
    <>
      <View style={styles.ranking}>
        <View style={styles.rankingTitle}>
          {/* total / today rank change button */}
          <TouchableOpacity
            onPress={() => {
              if (rank === "Today's") {
                setRank('Total');
              } else {
                setRank("Today's");
              }
            }}>
            <Change width={28} height={28} fill={AppColor.brand_white} />
          </TouchableOpacity>
          <Text style={styles.rankingTitleText}>{rank} Ranking</Text>
          <TouchableOpacity>
            <Account width={28} height={28} fill={AppColor.brand_white} />
          </TouchableOpacity>
        </View>
        <View style={styles.list}>
          <ResultBox />
          <ResultBox />
          <ResultBox />
        </View>
      </View>
      <View style={styles.boxing}>
        <Text>asdfasdf</Text>
      </View>
    </>
  );
}
