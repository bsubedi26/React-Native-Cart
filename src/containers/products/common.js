import styled from 'styled-components/native'
import Colors from 'src/constants/Colors'

export const Name = styled.Text`
    padding: 3px;
    width: 125px;
    height: 35px;
    textAlign: center;
    background-color: ${() => Colors.violetLight};
    font-size: 20px;
`

export const FlexRowCenter = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

export const WhiteSpace = styled.View`
    padding: 10px;
`

export const Container = styled.View`
    flex: 1;
    justifyContent: center;
    alignItems: center;
`
