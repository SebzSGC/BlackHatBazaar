import { StyleSheet } from 'react-native'

const globalStyles = StyleSheet.create({
  //button styles
  retroButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  retroButton: {
    backgroundColor: '#333',
    padding: 10,
    borderRadius: 5,
    borderColor: '#FFF',
    borderWidth: 1,
  },
  retroButtonText: {
    color: '#FFF',
    fontFamily: 'HACKED',
    fontSize: 14,
  },
  retroTitle: {
    fontFamily: 'HACKED',
    color: '#333',
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  retroHeader: {
    fontSize: 24,
    fontFamily: 'HACKED',
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  retroMessage: {
    fontFamily: 'Jersey10-Regular',
    color: '#000',
    fontSize: 14,
    marginVertical: 10,
    textAlign: 'center',
  },
  //Modal styles
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  retroContainer: {
    borderColor: '#000',
    borderWidth: 2,
    backgroundColor: '#E6E6E6',
    padding: 0,
    borderRadius: 5,
    width: '80%',
  },
  subBar: {
    backgroundColor: '#333',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  subBarText: {
    color: '#FFF',
    fontSize: 14,
    fontFamily: 'Jersey10-Regular',
  },
  contentContainer: {
    padding: 15,
  },
  subBarWithClose: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#333',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  closeButton: {
    padding: 5,
    backgroundColor: '#444',
    borderRadius: 5,
  },
  closeButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontFamily: 'monospace',
  },
})

export default globalStyles
