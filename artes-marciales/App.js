import React, {useState} from 'react';
import {Alert, Modal,StyleSheet, Text, Pressable, View,Image} from 'react-native';

const App = () =>{
  const[modalVisible, setModalVisible] = useState(false);
  const[modalVisible2, setModalVisible2] = useState(false);
  const[modalVisible3, setModalVisible3] = useState(false);
  const[modalVisible4, setModalVisible4] = useState(false);
  const[modalVisible5, setModalVisible5] = useState(false);
  const[modalVisible6, setModalVisible6] = useState(false);
  const[modalVisible7, setModalVisible7] = useState(false);
  const[modalVisible8, setModalVisible8] = useState(false);
  const[modalVisible9, setModalVisible9] = useState(false);
  const[modalVisible10, setModalVisible10] = useState(false);


  return (
    <View style={style.centeredView}>
         <Text>Mejores Artes Marciales</Text>
      <Modal
         animationType="slide"
         transparent={true}
         visible={modalVisible}
         onRequestClose={() => {
           Alert.alert('Modal has been closed.');
           setModalVisible(!modalVisible);
         }}>
     
            </Modal>

            <Modal
            
         animationType="slide"
         transparent={true}
         visible={modalVisible2}
         onRequestClose={() => {
           Alert.alert('Modal has been closed.');
           setModalVisible2(!modalVisible2);
         }}>
         <View style={style.centeredView}>
           <View style={style.modalView}>
           
              <Text style={style.modalText}> .

</Text>

 
             
              <Pressable
                style={[style.button, style.buttonClose]}
                onPress={() => setModalVisible2(!modalVisible2)}>
                <Text style={style.textStyle}>Conocer otra arte marcial</Text>
                
              </Pressable>
            </View>
            </View>
            </Modal>




             <Modal
         animationType="slide"
         transparent={true}
         visible={modalVisible2}
         onRequestClose={() => {
           Alert.alert('Modal has been closed.');
           setModalVisible2(!modalVisible2);
         }}>
         <View style={style.centeredView}>
           <View style={style.modalView}>
              <Text style={style.modalText}> 
En los últimos 20 años, MMA (artes marciales mixtas) se ha desarrollado de una manera que ahora es el deporte de más rápido crecimiento en el mundo. Es el tercer deporte más visto en los Estados Unidos y su rápido desarrollo y crecimiento también se está ganando en Asia y Europa. Sobre todo gracias a las competiciones excelentemente organizadas que son seguidas ampliamente por los medios de comunicación y su siguiente producción, algunos de los luchadores-competidores más exitosos se han convertido en superestrellas. Atraen la atención a diario y dejan una fuerte impresión en cada individuo.
</Text>
             <Image
                            resizeMode="shelo"
                            source={require('./MMA.jpg')}
                            style={style.imaejem}
                          />
              <Pressable
                style={[style.button, style.buttonClose]}
                onPress={() => setModalVisible2(!modalVisible2)}>
                <Text style={style.textStyle}>Conocer otros</Text>
              </Pressable>
            </View>
            </View>
            </Modal>

             <Modal
         animationType="slide"
         transparent={true}
         visible={modalVisible3}
         onRequestClose={() => {
           Alert.alert('Modal has been closed.');
           setModalVisible3(!modalVisible3);
         }}>
         <View style={style.centeredView}>
           <View style={style.modalView}>
              <Text style={style.modalText}> El karate, designado oficialmente como Karate-do (camino de la palma vacía) es una de las artes marciales más reconocidas y difundidas a nivel mundial. Los orígenes sobre este estilo de combate datan del siglo XVI en las islas Ryūkyū, conocidas actualmente como Okinawa. El sistema de golpes que rige su forma de lucha se basa en propinar impactos contundentes, los cuales ganan poder a una distancia media del contrincante. El entrenamiento del cuerpo es en esencia exigente, preponderando el aumento gradual en la dureza de los músculos.
</Text>
   <Image
                            resizeMode="hielo"
                            source={require('./Karate.jpg')}
                            style={style.imaejem}
                          />
              <Pressable
                style={[style.button, style.buttonClose]}
                onPress={() => setModalVisible3(!modalVisible3)}>
                <Text style={style.textStyle}>Conocer otros</Text>
              </Pressable>
            </View>
            </View>
            </Modal>

              <Modal
         animationType="slide"
         transparent={true}
         visible={modalVisible4}
         onRequestClose={() => {
           Alert.alert('Modal has been closed.');
           setModalVisible4(!modalVisible4);
         }}>
         <View style={style.centeredView}>
           <View style={style.modalView}>
              <Text style={style.modalText}> En 1909, Japón prohibió la práctica de las artes marciales en Corea, donde existían dos formas de lucha muy populares, el Sirum, lucha tradicional coreana similar a la lucha Canaria, con la que en tiempos recientes se han realizado algunos enfrentamientos amistosos, y al Tae Kyon que fue totalmente prohibido durante la ocupación por lo que el antiguo Subak y el más antiguo Tae Kyon, que es practicado en secreto por un grupo muy reducido de simpatizantes.
</Text>
             <Image
                            resizeMode="curcuma"
                            source={require('./Taewondo.jpg')}
                            style={style.imaejem}
                          />
              <Pressable
                style={[style.button, style.buttonClose]}
                onPress={() => setModalVisible4(!modalVisible4)}>
                <Text style={style.textStyle}>Conocer otros</Text>
              </Pressable>
            </View>
            </View>
            </Modal>

            
              <Modal
         animationType="slide"
         transparent={true}
         visible={modalVisible5}
         onRequestClose={() => {
           Alert.alert('Modal has been closed.');
           setModalVisible5(!modalVisible5);
         }}>
         <View style={style.centeredView}>
           <View style={style.modalView}>
              <Text style={style.modalText}>Aunque muchos lo conocen como una disciplina moderna, la verdad es que el Judo tiene sus raíces en el antiguo arte marcial japonés del Jujutsu. Fue en 1882 cuando el fundador del Judo, Jigoro Kano, creó esta disciplina con el objetivo de promover la educación física y mental, así como la formación de una sociedad más pacífica.

Desde entonces, el Judo ha evolucionado y se ha convertido en uno de los deportes más populares en todo el mundo. En los Juegos Olímpicos de Tokio 2020, el Judo será uno de los deportes principales, con más de 400 atletas compitiendo en 15 categorías diferentes. Además, el Judo es uno de los deportes más inclusivos, con competiciones para todas las edades y habilidades.</Text>
                 <Image
                            resizeMode="jugo verde"
                            source={require('./Judo.jpg')}
                            style={style.imaejem}
                          />
              <Pressable
                style={[style.button, style.buttonClose]}
                onPress={() => setModalVisible5(!modalVisible5)}>
                <Text style={style.textStyle}>Conocer otros</Text>
              </Pressable>
            </View>
            </View>
            </Modal>

            <Modal
         animationType="slide"
         transparent={true}
         visible={modalVisible6}
         onRequestClose={() => {
           Alert.alert('Modal has been closed.');
           setModalVisible6(!modalVisible6);
         }}>
         <View style={style.centeredView}>
           <View style={style.modalView}>
              <Text style={style.modalText}>El boxeo es uno de los deportes más antiguos que se conocen en la actualidad, sus orígenes tienen 2.000 años de antigüedad en las paredes de las tumbas de Egipto y tallas de piedra que indican que el boxeo se originó en lo que hoy es Irak, pues los sumerios practicaban el boxeo hace al menos 5.000 años. El boxeo antiguo era un espectáculo agotador y brutal. </Text>
                 <Image
                            resizeMode="jabon de arroz"
                            source={require('./Boxeo.jpg')}
                            style={style.imaejem}
                          />
              <Pressable
                style={[style.button, style.buttonClose]}
                onPress={() => setModalVisible6(!modalVisible6)}>
                <Text style={style.textStyle}>Conocer otros</Text>
              </Pressable>
            </View>
            </View>
            </Modal>

                <Modal
         animationType="slide"
         transparent={true}
         visible={modalVisible7}
         onRequestClose={() => {
           Alert.alert('Modal has been closed.');
           setModalVisible7(!modalVisible7);
         }}>
         <View style={style.centeredView}>
           <View style={style.modalView}>
              <Text style={style.modalText}>Los registros sugieren que la historia kickboxing se inició en Japón y se desarrolló a partir del arte marcial del karate, pero cada vez más investigaciones muestran que es probable que se haya desarrollado simultáneamente a partir del arte marcial tailandés del Muay Thai. En la década de 1990, con la incorporación de más técnicas de lucha en el suelo adaptadas del jiu-jitsu brasileño, contribuyó a la evolución de las MMA (Artes marciales mixtas).</Text>
   <Image
                            resizeMode="moringa"
                            source={require('./Kick.jpg')}
                            style={style.imaejem}
                          />
              <Pressable
                style={[style.button, style.buttonClose]}
                onPress={() => setModalVisible7(!modalVisible7)}>
                <Text style={style.textStyle}>Conocer otros</Text>
              </Pressable>
            </View>
            </View>
            </Modal>

                <Modal
         animationType="slide"
         transparent={true}
         visible={modalVisible8}
         onRequestClose={() => {
           Alert.alert('Modal has been closed.');
           setModalVisible8(!modalVisible8);
         }}>
         <View style={style.centeredView}>
           <View style={style.modalView}>
              <Text style={style.modalText}>El Oriente Medio en los años 40 estaba dominado por el mandato británico, que establecía reglas claras y duras, haciendo uso de la fuerza para controlar la región y manipular a los grupos que allí vivían, provocando discordia entre ellos. Por eso, varios grupos se organizaron para la defensa de la población; sin armas, siendo minoría, pero con gran valentía y coraje; siendo éste es el escenario con el que se encontraría Imi a su llegada a Israel. Su experiencia en enfrentamientos reales en Europa lo puso ante la misión de preparar a los grupos de defensa en poco tiempo para enfrentar enemigos bien armados y numerosos, garantizando la supervivencia de su pueblo.   </Text>
                 <Image
                            resizeMode="romero"
                            source={require('./Krav.jpg')}
                            style={style.imaejem}
                          />
              <Pressable
                style={[style.button, style.buttonClose]}
                onPress={() => setModalVisible8(!modalVisible8)}>
                <Text style={style.textStyle}>Conocer otros</Text>
              </Pressable>
            </View>
            </View>
            </Modal> 


            <Modal
         animationType="slide"
         transparent={true}
         visible={modalVisible9}
         onRequestClose={() => {
           Alert.alert('Modal has been closed.');
           setModalVisible9(!modalVisible9);
         }}>
         <View style={style.centeredView}>
           <View style={style.modalView}>
              <Text style={style.modalText}>El primer uso documentado del Muay Thai en Tailandia se remonta a varios cientos de años atrás. En su forma más primitiva, era una versión muy sencilla del combate cuerpo a cuerpo, en la que el objetivo principal era convertir todo el cuerpo humano en un arma. </Text>
                 <Image
                            resizeMode="hierbas"
                            source={require('./Muay.jpg')}
                            style={style.imaejem}
                          />
          

              <Pressable
                style={[style.button, style.buttonClose]}
                onPress={() => setModalVisible9(!modalVisible9)}>
                <Text style={style.textStyle}>Conocer otros</Text>
              </Pressable>
            </View>
            </View>
            </Modal> 

           
     
            <Modal
         animationType="slide"
         transparent={true}
         visible={modalVisible10}
         onRequestClose={() => {
           Alert.alert('Modal has been closed.');
           setModalVisible10(!modalVisible10);
         }}>
         <View style={style.centeredView}>
           <View style={style.modalView}>
              <Text style={style.modalText}>El jiu-jitsu es un arte marcial de origen japonés que se enfoca en la lucha cuerpo a cuerpo y técnicas de sometimiento. Este deporte tiene una historia que se remonta al siglo XVII en Japón. Los samuráis, guerreros de élite japoneses, desarrollaron esta técnica de lucha como parte de su entrenamiento para protegerse en el campo de batalla. </Text>
                 <Image
                            resizeMode="clorofila"
                            source={require('./Brasileno.jpg')}
                            style={style.imaejem}
                          />
              <Pressable
                style={[style.button, style.buttonClose]}
                onPress={() => setModalVisible10(!modalVisible10)}>
                <Text style={style.textStyle}>Conocer otros</Text>
              </Pressable>
            </View>
            </View>
            </Modal> 


            <Pressable
              style={[style.button, style.buttonOpen]}
              onPress={() => setModalVisible(true)}>
              <Image source={require('./Kendo.jpg')} style={style.shelo}/>
               </Pressable>
              <text>&nbsp;</text>
               <Text>Los mejores para entrenarte</Text>
               <text>&nbsp;</text>


               <Pressable
              style={[style.button, style.buttonOpen]}
              onPress={() => setModalVisible2(true)}>
              <Text style={style.textStyle}>MMA </Text>
              
               </Pressable>
              <text>&nbsp;</text>


               <Pressable
              style={[style.button, style.buttonOpen]}
              onPress={() => setModalVisible3(true)}>
              <Text style={style.textStyle}>Karate</Text>
              
              
               </Pressable>
              <text>&nbsp;</text>


               <Pressable
              style={[style.button, style.buttonOpen]}
              onPress={() => setModalVisible4(true)}>
              <Text style={style.textStyle}>Takwondo</Text>
             
              
               </Pressable>
              <text>&nbsp;</text>

               <Pressable
              style={[style.button, style.buttonOpen]}
              onPress={() => setModalVisible5(true)}>
              <Text style={style.textStyle}>Judo</Text>
              
             
               </Pressable>
              <text>&nbsp;</text>

               <Pressable
              style={[style.button, style.buttonOpen]}
              onPress={() => setModalVisible6(true)}>
              <Text style={style.textStyle}>Boxeo</Text>
             
               </Pressable>
              <text>&nbsp;</text>


               <Pressable
              style={[style.button, style.buttonOpen]}
              onPress={() => setModalVisible7(true)}>
              <Text style={style.textStyle}>Kick Boxing</Text>
             
               </Pressable>
              <text>&nbsp;</text>

               <Pressable
              style={[style.button, style.buttonOpen]}
              onPress={() => setModalVisible8(true)}>
              <Text style={style.textStyle}>Krav maga</Text>
              
               </Pressable>
              <text>&nbsp;</text>

               <Pressable
              style={[style.button, style.buttonOpen]}
              onPress={() => setModalVisible9(true)}>
              <Text style={style.textStyle}>Muay Thai</Text>
               </Pressable>
               <text>&nbsp;</text>

               <Pressable
              style={[style.button, style.buttonOpen]}
              onPress={() => setModalVisible10(true)}>
              <Text style={style.textStyle}>Jiu jitsu brasileno</Text>
              
               </Pressable>
               <text>&nbsp;</text>

            </View>
          );
};
const style = StyleSheet.create({

  shelo: {
    width:100,
    height:100,
    borderRadius:10,
  },
  centeredView: {
    backgroundColor:'white',
    flex:1,
    justifyContent:'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: '#8FFCFC',
    borderRadius: 20,
    padding: 35,
    alingItems: 'center',
    shadowColor: '#000',
    shadowOffset:{
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#FCA646',
  },
  buttonClose: {
    alignContent: 'center',
    backgroundColor: '#FCA646',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAling: 'center',
  },
  imaejem:
  {
     width: 150,
     height: 150,
  },
  modalText: {
    marginBottom: 15,
    textAling: 'center',
  },

});

export default App;
