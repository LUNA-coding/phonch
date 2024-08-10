import {StyleSheet} from 'react-native';
import {AppColor} from '../../global';

export const styles = StyleSheet.create({
  ranking: {flex: 1, padding: 24, gap: 24},
  rankingTitle: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rankingTitleText: {
    fontSize: 24,
    fontFamily: 'SUIT-ExtraBold',
    color: AppColor.brand_white,
  },
  list: {flex: 1, flexDirection: 'column', gap: 12},
  boxing: {flex: 0},
});
