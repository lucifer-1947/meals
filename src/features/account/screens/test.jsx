import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { Svg, SvgXml } from 'react-native-svg'
import { google } from '../../../../assets/images/google'
import styled from 'styled-components/native'
import { background } from '../../../../assets/images/background'
import { chef } from '../../../../assets/images/chef'
import { burger } from '../../../../assets/images/burger'

const StyledView = styled.View`
background: #000000;
flex: 1;
align-items: center;
justify-content: top;
`

const StyledSvg = styled(SvgXml)`
position: absolute;

`

export default function Test() {
  return (
    <StyledView>
        <SvgXml xml = {background} width='100%' height='100%' />
        {/* <StyledSvg xml={google}/> */}
    </StyledView>
  )
}