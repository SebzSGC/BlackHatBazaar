import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  Platform,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native'
import RetroBell from '../components/icons/RetroBell'
import RetroSupport from '../components/icons/RetroSupport'
import RetroHearth from '../components/icons/RetroHearth'
import RetroData from '../components/icons/RetroData'
import RetroBoughts from '../components/icons/RetroBoughts'
import globalStyles from '../styles/Global'

const RetroProfile: React.FC = () => {
  const booleano = false
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.welcome}>Mi Perfil</Text>
        <TouchableOpacity>
          <Text style={globalStyles.retroButtonText}>
            <RetroBell fill={booleano ? '#FF0000' : '#000'} />
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.profileBox}>
          <View style={styles.cardIn}>
            <View>
              <Text style={[globalStyles.retroHeader, { color: '#fff' }]}>
                nombre
              </Text>
              <Text style={styles.cardDescription}>alias</Text>
            </View>
            <View style={styles.imageContainer}>
              <Image
                style={styles.image}
                source={{ uri: 'https://picsum.photos/200/301' }}
              />
              <View style={styles.glitchEffect} />
              {[...Array(6)].map((_, i) => (
                <View key={i} style={[styles.glitchLines, { top: i * 14 }]} />
              ))}
            </View>
          </View>
        </View>
        <TouchableOpacity style={styles.profileBoxShadow}>
          <View style={styles.cardIn}>
            <Text style={styles.cardHeader}>Mis compras</Text>
            <Text style={styles.iconText}>
              <RetroBoughts />
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.profileBoxShadow}>
          <View style={styles.cardIn}>
            <Text style={styles.cardHeader}>Mis datos</Text>
            <Text style={styles.iconText}>
              <RetroData />
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.profileBoxShadow}>
          <View style={styles.cardIn}>
            <Text style={styles.cardHeader}>Mis favoritos</Text>
            <Text style={styles.iconText}>
              <RetroHearth />
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.profileBoxShadow}>
          <View style={styles.cardIn}>
            <Text style={styles.cardHeader}>Soporte</Text>
            <Text style={styles.iconText}>
              <RetroSupport />
            </Text>
          </View>
        </TouchableOpacity>
        <View style={styles.versionText}>
          <Text style={styles.cardDescription}>BlackHatBazaar</Text>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
  },
  scrollContainer: {
    marginTop: 10,
  },
  header: {
    marginTop: Platform.OS === 'ios' ? 50 : 0,
    paddingVertical: 15,
    backgroundColor: '#444',
    borderBottomWidth: 2,
    borderBottomColor: '#FFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 24,
    fontFamily: 'HACKED',
    color: '#FFF',
    marginHorizontal: 15,
  },
  headerButtonText: {
    fontSize: 20,
    color: '#FFF',
    marginHorizontal: 15,
  },
  cardIn: {
    fontSize: 20,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardHeader: {
    fontSize: 18,
    fontFamily: 'HACKED',
    color: '#FFF',
  },
  cardDescription: {
    fontSize: 16,
    fontFamily: 'Jersey10-Regular',
    color: '#CCC',
    marginTop: 6,
  },
  profileBox: {
    margin: 15,
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#444',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#FFF',
  },
  profileBoxShadow: {
    marginVertical: 5,
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: '#444',
    borderRadius: 10,
    borderBottomWidth: 2,
    borderColor: '#FFF',
  },
  image: {
    height: 80,
    width: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: '#FFF',
    backgroundColor: '#000',
    opacity: 0.9,
  },

  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#000',
    borderWidth: 2,
    borderColor: '#FFF',
    borderRadius: 40,
    shadowColor: '#0F0',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 8,
    position: 'relative',
    overflow: 'hidden',
  },

  glitchEffect: {
    position: 'absolute',
    top: -2,
    left: -2,
    height: '100%',
    width: '100%',
    borderColor: '#00FF00',
    borderWidth: 1,
    transform: [{ rotateZ: '1deg' }],
    opacity: 0.6,
  },

  glitchLines: {
    position: 'absolute',
    width: '100%',
    height: 2,
    backgroundColor: '#00FF00',
    opacity: 0.2,
  },
  iconText: {
    fontSize: 18,
    color: '#FFF',
  },
  versionText: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
})

export default RetroProfile
