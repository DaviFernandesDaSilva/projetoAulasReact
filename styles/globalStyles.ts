import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface GlobalStyles {
  container: ViewStyle;
  header: ViewStyle;
  mainTitle: TextStyle;
  contentContainer: ViewStyle;
  contentText: TextStyle;
  errorText: TextStyle;

  itemContainer: ViewStyle;
  item: ViewStyle;
  data: ViewStyle;
  dataDia: TextStyle;
  dataMes: TextStyle;
  itemTitle: TextStyle;

  separator: ViewStyle;

  subtitle: TextStyle;

  conteudo: TextStyle;

  link: TextStyle;
  linkText: TextStyle;

}

const globalStyles = StyleSheet.create<GlobalStyles>({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20, // juntando o que tinha no container3
  },
  header: {
    paddingTop: 20,
    paddingHorizontal: 16,
    paddingBottom: 12,
    backgroundColor: '#f0f0f0',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    width: '100%',
  },
  mainTitle: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
  },
  contentContainer: {
    padding: 20,
  },
  contentText: {
    fontSize: 17,
    lineHeight: 26,
    color: '#444',
    textAlign: 'justify',
  },
  errorText: {
    fontSize: 20,
    color: '#a00',
    textAlign: 'center',
    marginTop: 40,
  },

  itemContainer: {
    flex: 1,
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: '#f9f9f9',
  },
  item: {
    flexDirection: 'row',
    padding: 14,
    marginVertical: 6,
    marginHorizontal: 4,
    backgroundColor: '#e0e0e0',
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 4,
  },
  data: {
    backgroundColor: '#c0c0c0',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
    minWidth: 60,
  },
  dataDia: {
    fontSize: 24,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  dataMes: {
    fontSize: 12,
    fontWeight: '600',
    textTransform: 'capitalize',
    textAlign: 'center',
    marginTop: 2,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
  itemTitle: {
    flex: 1,
    fontSize: 18,
    fontWeight: '700',
    color: '#222',
  },

  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
    backgroundColor: '#ccc',
  },

  subtitle: {
    fontSize: 16,
    color: '#666',
    fontWeight: '300',
  },
  conteudo: {
    fontSize: 16,
    color: '#444',
    lineHeight: 24,
  },
});

export default globalStyles;
