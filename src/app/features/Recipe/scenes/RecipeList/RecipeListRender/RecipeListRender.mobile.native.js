import React from 'react';
import {View} from 'react-native';

import {
  OriginText,
  TextTitleRecipe,
  TextTitleBox,
  ImageRecipe,
  ImageBox,
  ViewScene,
  ViewSearchSection,
  TouchableHighlighSearchButton,
  ScrollViewSection,
  TextInputSearch,
  ViewBox,
  Text
} from './StyledElements';

const Recipe = (props) => {
  const {type, recipe} = props;
  return type === 'tiles' ? <RecipeTile {...recipe} />:<RecipeBox {...recipe} />
}

const RecipeBox = ({image, title}) => {
  return (<ViewBox >
    <ImageBox source={{
      uri: image
    }}/>
    <TextTitleBox>
      {title
        .trim()}
    </TextTitleBox>
  </ViewBox>)
}

const RecipeTile = ({image, title}) => {
  return (<View>
    <ImageRecipe source={{
      uri: image
    }}/>
    <TextTitleRecipe>
      {title
        .trim()}
    </TextTitleRecipe>
  </View>)
}

// const Loader = () => <Text>Loading more ...</Text>;

export default class RecipeListRender extends React.Component{
  constructor(props){
    super(props)
    this.state = {ingredients: props.ingredients || ''}
  }

  fetchMoreItems(page){
    console.log(page);
    if(this.props.recipeList != null){
      // this.props.fetchMore(page);
    }
  }

  handleScroll({nativeEvent}){
    const {layoutMeasurement, contentOffset, contentSize} = nativeEvent;
    const paddingToBottom = 0;
    let bottom= layoutMeasurement.height + contentOffset.y >=
      contentSize.height - paddingToBottom;

      if(bottom){
        this.props.fetchMore();
      }
  }

  handleList(event){
    console.log(true);
  }

  render(){
    var {fetchRecipes, recipeList, uiState} = this.props;
    var {isSearching, error, listType} = uiState;
    var {ingredients} = this.state;
    var items =  !isSearching && (recipeList != null ? 
      recipeList.map(recipe => {
      return <Recipe key={recipe.id} recipe={recipe} type={listType} />
    }) : error?<Text> Error </Text>:<Text> Nothing Found </Text>)

    return(
        <View style={{flex:1}}>
          <ViewScene>
            <ViewSearchSection>
              <TextInputSearch
                returnKeyType="search"
                placeholder="Ingredients(comma delimited)"
                onChangeText={(input) => this.setState({ingredients:input})}
                value={ingredients}/>
              <TouchableHighlighSearchButton onPress={() => {fetchRecipes(ingredients)}}>
                <Text>Fetch Recipes</Text>
              </TouchableHighlighSearchButton>
            </ViewSearchSection>
            <ScrollViewSection onScroll={this.handleScroll.bind(this)}  scrollEventThrottle={2000}>
                  {listType === 'box' ? 
                  <View style={{flex:1, flexDirection:'row', flexWrap:'wrap'}} >
                    {items}
                  </View> : items}
                  {isSearching ? <Text>Searching...</Text> : null}
            </ScrollViewSection>
            {/* <ListViewSection onEndReached={this.handleList} >
                  {listType === 'box' ? 
                  <View style={{flex:1, flexDirection:'row', flexWrap:'wrap'}} >
                    {items}
                  </View> : items}
                  {isSearching ? <Text>Searching...</Text> : null}
            </ListViewSection> */}

          </ViewScene>
          <OriginText>
            Sou o render Generico!
          </OriginText>
        </View>
      )
    }
  }