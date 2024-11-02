import { StyleSheet } from 'react-native'

const globalStyles = StyleSheet.create({
  pickerContainer: {
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 5,
  },
  datePickerText: {
    fontSize: 16,
    color: '#000',
    paddingVertical: 10,
    textAlign: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
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
    alignItems: 'center',
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
    fontFamily: 'HACKED',
  },
  input: {
    backgroundColor: '#E6E6E6',
    borderRadius: 10,
    borderColor: '#000',
    borderWidth: 2,
    padding: 10,
    marginBottom: 20,
    fontFamily: 'Jersey10-Regular',
    fontSize: 16,
    color: '#333',
  },
  label: {
    fontFamily: 'Jersey10-Regular',
    fontSize: 16,
    color: '#000',
    marginBottom: 10,
  },
  //forms styles
  formContainer: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 20,
    justifyContent: 'center',
  },
  formAccountContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  formLogo: {
    width: 150,
    height: 150,
    borderRadius: 75,
    resizeMode: 'cover',
    alignSelf: 'center',
    marginBottom: 40,
  },

  formButton: {
    backgroundColor: '#333',
    borderRadius: 10,
    paddingVertical: 10,
    borderColor: '#FFF',
    borderWidth: 2,
    alignItems: 'center',
  },
  formButtonText: {
    color: '#FFF',
    fontFamily: 'HACKED',
    fontSize: 18,
  },

  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
  },

  //hambugueer menu styles
  hamburgerButton: {
    width: 30,
    height: 30,
    justifyContent: 'space-between',
  },
  hamburgerLine: {
    width: '100%',
    height: 4,
    backgroundColor: '#000',
    borderRadius: 2,
  },
  productImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
    borderRadius: 5,
    marginBottom: 10,
  },
  retroPrice: {
    fontFamily: 'HACKED',
    color: '#333',
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 10,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  quantityButton: {
    backgroundColor: '#444',
    padding: 10,
    borderRadius: 5,
    borderColor: '#FFF',
    borderWidth: 1,
    marginHorizontal: 5,
  },
  quantityButtonText: {
    color: '#FFF',
    fontFamily: 'HACKED',
    fontSize: 18,
  },
  quantityText: {
    fontFamily: 'HACKED',
    color: '#333',
    fontSize: 18,
    textAlign: 'center',
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#E0E0E0',
    paddingVertical: 15,
    borderTopWidth: 2,
    borderTopColor: '#B0B0B0',
    position: 'relative',
  },
  navItem: {
    alignItems: 'center',
    padding: 10,
  },
  navText: {
    marginTop: 5,
    fontSize: 14,
    color: '#4D4D4D',
    fontFamily: 'Jersey10-Regular',
  },
  searchContainer: {
    position: 'absolute',
    top: -60,
    left: 0,
    right: 0,
    alignItems: 'center',
    paddingBottom: 10,
  },
  searchInput: {
    height: 40,
    width: '90%',
    borderColor: '#B0B0B0',
    borderWidth: 2,
    borderRadius: 20,
    paddingHorizontal: 15,
    backgroundColor: '#F5F5F5',
    color: '#4D4D4D',
    fontFamily: 'Jersey10-Regular',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  cartBadge: {
    position: 'absolute',
    top: -8,
    right: -8,
    backgroundColor: '#ff0000',
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartBadgeText: {
    color: '#000',
    fontSize: 13,
    fontFamily: 'HACKED',
  },
})

export default globalStyles
