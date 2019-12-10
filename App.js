import React, {Component} from 'react';
import {StyleSheet, Button, Text, View} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import Pin from './src/Pin';

export default class App extends Component{
constructor(props){
  super(props);
  this.state = {
    region: {
      latitude: 2.8323286,
      longitude: -60.7226058,
      latitudeDelta: 0.0222,
      longitudeDelta: 0.0421
    },
    markers: [ //image:require('./assets/images/carro.png'), 
      {key: 0, aviso:'Tranquilo', coords: {latitude:2.8323286, longitude:-60.7226058}, pinColor: 'green'}, 
      {key: 1, aviso:'Tranquilo',coords: {latitude:2.817867368724952, longitude:-60.720853507518775}, pinColor: 'green'}, 
      {key: 2, aviso:'Perigoso',coords: {latitude:2.8249157064827033, longitude:-60.7003493607070442}, pinColor: 'red'},
      {key: 3, aviso:'Perigoso',coords: {latitude:2.8021541236288066, longitude:-60.747047290205956}, pinColor: 'red'},
      {key: 4, aviso:'Vacilou! Perdeu!',coords: {latitude:2.820298862551606, longitude:-60.75958460569381}, pinColor: 'red'},   
      {key: 5, aviso:'Perigoso',coords: {latitude:2.7999462891083433, longitude:-60.75830418616533}, pinColor: 'red'} 
    ]
  }
  this.clicou = this.clicou.bind(this);
  this.moverCidade = this.moverCidade.bind(this);
}

  moverCidade(lat, long){
    let state= this.state;
    let region = {
      latitude: lat,
      longitude: long,
      latitudeDelta: 0.0222,
      longitudeDelta: 0.0421
    };
    state.region = region;
    this.setState(state);

  }
  /*
   
  */

     // {region.latitude} | {region.longitude}
        //scrollEnable={false}
        //zoomEnable={false}
        //rotateEnable={false}
        //showTraffic={true}
        //mapType="hybrid" standard | satellite | hybrid
  clicou(e){
    let state = this.state;
    state.markers.push({
      key: state.markers.length,
      coords: {
        latitude: e.nativeEvent.coordinate.latitude,
        longitude:e.nativeEvent.coordinate.longitude
      },
      pinColor: state.markers.pinColor,
      aviso: state.markers.aviso
    });
    alert("latitude Clicada " + e.nativeEvent.coordinate.latitude + "\n Longitude clicada: " +e.nativeEvent.coordinate.longitude);
    this.setState(state);
  }

  render() {

    const {region, markers} = this.state;
    return (
      <View style={styles.container}>
        <View style={{flexDirection:'row'}}>
          <Button title="Brasilia" onPress={() => {this.moverCidade(-15.8080374, -47.8750231)}} />
          <Button title="São Paulo" onPress={() => {this.moverCidade(-23.5492243, -46.5813785)}} />
          <Button title="Home" onPress={() => {this.moverCidade( 2.8323286, -60.7226058)}} />

        </View>

    
        <MapView 
            onPress={this.clicou}
            //showTraffic={true}
            rotateEnable={true}
            style={styles.mapas}
            region={region}> 
            {
              markers.map((marker) => {
                return( //image={marker.image}
                    <Marker  key={marker.key} coordinate={marker.coords}>
    
                        <Pin aviso={marker.aviso} corFundo={marker.pinColor} />

                    </Marker>
                );
              })
            }
            
        


        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  mapas: {
    width: '100%',
    height: 550
  },
  
});
