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
    .home-pic{
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
    border-bottom: 1px solid #dcdcdc;
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


// 列表
export const ListItem = styled.div`
    padding: 20px 0;
    border-bottom: 1px solid #dcdcdc;
    overflow: hidden;
    .list-pic{
        width: 125px;
        height: 100px;
        display: block;
        float: right;
        border-radius:10px;
    }
`
export const ListInfo = styled.div`
    width: 500px;
    float: left;
    .list-title{
        font-size: 18px;
        line-height:27px;
        font-weight: bold;
        color: #333;
    }
    .list-desc{
        font-size: 13px;
        line-height: 24px;
        color: #999;
    }
`

// RecommendWrapper

export const RecommendWrapper = styled.div`
    margin-top: -4px;
    padding-bottom: 4px;
    min-height: 228px;
`
export const RecommendItem = styled.a`
    .recommend-pic{
        width: 100%;
        min-height: 50px;
        margin-bottom: 6px;
        border-radius: 4px;
        vertical-align: middle;
    }
`

// Wrapper
export const WriterWrapper = styled.div`
    margin-bottom: 20px;
    padding-top: 0;
    font-size: 13px;
    text-align: center;
`
export const WrapperTitle = styled.div`
    text-align: left;
    .writer-title{
        font-size: 14px;
        color: #969696;
    }
    .writer-page-change{
        float: right;
        display: inline-block;
        font-size: 14px;
        color: #969696;
    }
`
export const WriterList = styled.ul`
    margin: 0 0 20px;
    text-align: left;
    list-style: none;
`
export const WriterItem = styled.li`
    margin-top: 15px;
    line-height: 20px;
    .writer-avator{
        float: left;
        width: 48px;
        height: 48px;
        margin-right: 10px;
        display: block;
        cursor: pointer;
        img{
            width: 100%;
            height: 100%;
            border: 1px solid #ddd;
            border-radius: 50%;
        }
    }
    .writer-follow{
        float: right;
        margin-top: 5px;
        padding: 0;
        font-size: 13px;
        color: #42c02e;
    }
    .writer-name{
        padding-top: 5px;
        margin-right: 60px;
        font-size: 14px;
        display: block;
        color: #333;
    }
    .writer-desc{
        margin-top: 2px;
        font-size: 12px;
        color: #969696;
    }

`
export const WriterMore = styled.a`
    position: absolute;
    padding: 7px 7px 7px 12px;
    left: 0;
    width: 100%;
    font-size: 13px;
    color: #787878;
    background-color: #f7f7f7;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
`

// DownLoad
export const DownloadWrapper = styled.a`
    margin-bottom: 30px;
    padding: 10px 22px;
    width: 100%;
    border: 1px solid #f0f0f0;
    border-radius: 6px;
    background-color: #fff;
    float: left;
    position: relative;
    min-height: 1px;
    height: 82px;
    img{
        width: 60px;
        height: 60px;
        opacity: .85;
    }
    .info{
        display: inline-block;
        vertical-align: middle;
        margin-left: 7px;
        margin-top: -40px;
    }
    .title{
        font-size: 15px;
        color: #333;
    }
    .description{
        margin-top: 4px;
        font-size: 13px;
        color: #999;
    }
`




