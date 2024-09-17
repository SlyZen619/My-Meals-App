import React from 'react';
import { View, Text, FlatList, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';

const CATEGORIES = [
  { id: '1', title: 'Cơm', imageUrl: 'https://tinyurl.com/4e3ee6ew' },
  { id: '2', title: 'Món nước', imageUrl: 'https://tinyurl.com/p4fcjknf' },
  { id: '3', title: 'Xôi', imageUrl: 'https://tinyurl.com/5vyt82ak' },
  { id: '4', title: 'Bánh mì', imageUrl: 'https://tinyurl.com/3stxk6nj' },
  { id: '5', title: 'Gỏi', imageUrl: 'https://tinyurl.com/3v4a4xaf' },
  { id: '6', title: 'Chè', imageUrl: 'https://tinyurl.com/muh2bcbs' },
];


const CategoriesScreen = ({ navigation }) => {
  const renderCategoryItem = (itemData) => {
    return (
      <TouchableOpacity
        style={styles.gridItem}
        onPress={() => {
          navigation.navigate('Meals', {
            categoryId: itemData.item.id,
            categoryTitle: itemData.item.title,
          });
        }}
      >
        <View style={styles.container}>
          <ImageBackground source={{ uri: itemData.item.imageUrl }} style={styles.bgImage}>
            <View style={styles.titleContainer}>
              <Text style={styles.title} numberOfLines={2}>
                {itemData.item.title}
              </Text>
            </View>
          </ImageBackground>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      keyExtractor={(item) => item.id}
      data={CATEGORIES}
      renderItem={renderCategoryItem}
      numColumns={2}
      // Không có tiêu đề hoặc component header ở đây
    />
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 5,
  },
  container: {
    flex: 1,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
  },
  bgImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  titleContainer: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingVertical: 5,
    paddingHorizontal: 12,
  },
  title: {

    fontSize: 22,
    color: 'white',
    textAlign: 'center',
  },
});

export default CategoriesScreen;
