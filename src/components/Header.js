import React from 'react';

import {
  StatusBar,
  StyleSheet,
} from 'react-native';
import {Header as HeaderRNE, Icon} from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import Popmenu from './Popmenu';

const Header = props => {
  const {title = 'Pilar Tecno', leftComponent, rightComponent} = props;
  const navigation = useNavigation();
  return (
    <>

      <StatusBar barStyle={'light-content'} color="#397af8" />
      <HeaderRNE
      backgroundColor='#5C87A2'
        leftComponent={
          leftComponent
            ? leftComponent
            : { onPress: () => navigation.openDrawer(),
                icon: 'menu',
                color: '#fff',
                marginTop: 5,
              }
        }
        rightComponent={rightComponent? rightComponent:(
          <Popmenu/>
        ) 
        }
        centerComponent={{text: title, style: styles.heading}}
      />
    </>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#397af8',
    marginBottom: 20,
    width: '100%',
    paddingVertical: 15,
  },
  heading: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
  headerRight: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 5,
  },
  subheaderText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Header;
