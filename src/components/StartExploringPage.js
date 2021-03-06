import React from 'react'
import { Helmet } from 'react-helmet'
import { translate } from 'react-i18next'
import { colorForNode, nameForNode, shortNameForNode } from './object-info/ObjectInfo'
import IpldExploreForm from './explore/IpldExploreForm'
import AboutIpld from './about/AboutIpld'

const ExploreSuggestion = ({ cid, name, type }) => {
  return (
    <a className='flex items-center lh-copy pl3 pl0-l pv3 bb b--black-10 link focus-outline' href={`#/explore/${cid}`}>
      <span className='flex items-center justify-center w3 h3 flex-none br-100 tc' style={{ background: colorForNode(type) }}>
        <span className='montserrat fw2 f4 snow' title={nameForNode(type)}>{shortNameForNode(type)}</span>
      </span>
      <span className='pl3 truncate'>
        <h2 className='ma0 fw4 f5 db black montserrat'>{name}</h2>
        <span className='f7 db blue truncate monospace'>{cid}</span>
      </span>
    </a>
  )
}

const StartExploringPage = ({ t, embed }) => {
  return (
    <div className='mw9 center'>
      <Helmet>
        <title>{t('StartExploringPage.title')}</title>
      </Helmet>
      <div className='flex-l'>
        <div className='flex-auto-l mr3-l'>
          <div className='pl3 pl0-l pt4 pt2-l'>
            <h1 className='f3 f2-l ma0 fw4 montserrat charcoal'>{t('StartExploringPage.header')}</h1>
            <p className='lh-copy f5 avenir charcoal-muted'>{t('StartExploringPage.leadParagraph')}</p>
          </div>
          {embed ? <IpldExploreForm /> : null}
          <ul className='list pl0 ma0 mt4 mt0-l bt bn-l b--black-10'>
            <li>
              <ExploreSuggestion name='Project Apollo Archives' cid='QmSnuWmxptJZdLJpKRarxBMS2Ju2oANVrgbr2xWbie9b2D' type='dag-pb' />
            </li>
            <li>
              <ExploreSuggestion name='IGIS git repo' cid='z8mWaJHXieAVxxLagBpdaNWFEBKVWmMiE' type='git-raw' />
            </li>
            <li>
              <ExploreSuggestion name='An Ethereum Block' cid='z43AaGEvwdfzjrCZ3Sq7DKxdDHrwoaPQDtqF4jfdkNEVTiqGVFW' type='eth-block' />
            </li>
            <li>
              <ExploreSuggestion name='XKCD' cid='QmdmQXB2mzChmMeKY47C43LxUdg1NDJ5MWcKMKxDu7RgQm' type='dag-pb' />
            </li>
          </ul>
        </div>
        <div className='pt2-l'>
          <AboutIpld />
        </div>
      </div>
    </div>
  )
}

export default translate('explore')(StartExploringPage)
