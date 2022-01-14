import React, {useState} from 'react';
import { View, Text } from 'react-native';
import Icons from '../libs/icons'
import DateTimePicker from '@react-native-community/datetimepicker';

const DateFilter = () => {    
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [filterSelect , setFilterSelect]= React.useState(false)
    
    const onChange = (event, selectedDate) => {
       const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
      };
    
      const showMode = (currentMode) => {
        setMode(currentMode);
        setShow(true)
      };
      const showDatepicker = () => {
        
        showMode('date');
        setFilterSelect(!filterSelect);
        if(filterSelect!==false){
          setDate(new Date())
          setShow(false)
        }
      };
    
      const showTimepicker = () => {
        showMode('time');
      };
      
    return ( 
    <View>
        <Icons name={filterSelect === true ? "filter-remove":"filter" } type={'MaterialCommunityIcons'} 
                style={{fontSize:20,padding:10,marginLeft:-10}} 
        onPress={showDatepicker} />
        {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={mode}
              is24Hour={true}
              display="default"
              onChange={onChange}
            />
          )}
     
    </View>)
};
export default DateFilter;
