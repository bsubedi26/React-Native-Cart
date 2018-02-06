import styled from 'styled-components/native'
import Colors from 'src/constants/Colors'

export const Name = styled.Text`
    padding: 3px;
    width: 50%;
    height: 35px;
    textAlign: center;
    background-color: ${() => Colors.violetLight};
    font-size: 24px;
    font-family: 'Baskerville';
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
    padding-top: 10px;
    flex: 1;
    justifyContent: center;
    alignItems: center;
`
export const Price = styled.Text`
    margin-top: 6px;
    padding: 3px;
    background-color: ${() => Colors.violetLight};
    width: 25%;
    height: 25px;
    text-align: center;
    font-size: 16px;
    font-family: 'Baskerville';
`