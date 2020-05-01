import styled from 'styled-components'

export const HomeWrapper = styled.div`
    margin-left: -15px;
    margin-right: -15px;
`

export const HomeLeft = styled.div`
    padding-top: 30px;
    padding-right: 0;
    width: 66.66667%;
    float: left;
    position: relative;
    min-height: 1px;
    padding-left: 15px;
    img{
      width: 625px;
      height: 270px;
    }
`

export const HomeRight = styled.div`
    padding: 30px 0 0;
    margin-left: 4.16667%;
    width: 29.16667%;
    float: left;
    position: relative;
    min-height: 1px;
`

// Topic
export const TopicWrapper = styled.div`
    overflow: hidden;
    padding: 20px 0 10px 0;
    margin-left: -18px;
`
export const TopicItem = styled.div`
    float: left;
    background:#f7f7f7;
    height: 32px;
    line-height:32px;
    font-size: 14px;
    color: #000;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    padding-right:10px;
    overflow: hidden;
    cursor: pointer;
    margin-left: 18px;
    margin-bottom: 10px;
    .topic-pic{
        width: 32px;
        height: 30px;
        display: block;
        float:left;
        margin-right:10px;
    }
`