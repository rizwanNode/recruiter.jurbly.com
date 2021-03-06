import React, { PureComponent } from 'react';
import { message, Tabs, Skeleton, Row, Col, Tooltip } from 'antd';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import classNames from 'classnames';
import { getHttpUrl } from '@bit/russeii.deephire.utils.utils';
import styles from './index.less';
import BreadcrumbView from './breadcrumb';

const { TabPane } = Tabs;
export default class PageHeader extends PureComponent {
  onChange = key => {
    const { onTabChange } = this.props;
    if (onTabChange) {
      onTabChange(key);
    }
  };

  render() {
    const {
      title,
      shortUrl,
      logo,
      action,
      content,
      extraContent,
      tabList,
      className,
      tabActiveKey,
      tabDefaultActiveKey,
      tabBarExtraContent,
      loading = false,
      wide = false,
      hiddenBreadcrumb = false,
    } = this.props;

    const clsString = classNames(styles.pageHeader, className);
    const activeKeyProps = {};
    if (tabDefaultActiveKey !== undefined) {
      activeKeyProps.defaultActiveKey = tabDefaultActiveKey;
    }
    if (tabActiveKey !== undefined) {
      activeKeyProps.activeKey = tabActiveKey;
    }
    return (
      <div className={clsString}>
        <div className={wide ? styles.wide : ''}>
          <Skeleton
            loading={loading}
            title={false}
            active
            paragraph={{ rows: 3 }}
            avatar={{ size: 'large', shape: 'circle' }}
          >
            {hiddenBreadcrumb ? null : <BreadcrumbView {...this.props} />}
            <div className={styles.detail}>
              {logo && <div className={styles.logo}>{logo}</div>}
              <div className={styles.main}>
                <div className={styles.row}>
                  {title && (
                    <Row type="flex" justify="start" gutter={24}>
                      <Col style={{ flexGrow: 1 }}>
                        <h1 className={styles.title}>{title}</h1>
                      </Col>
                      <Col>
                        <h1 className={styles.title}>
                          <Tooltip title="Click to copy">
                            <CopyToClipboard
                              text={getHttpUrl(shortUrl)}
                              onCopy={() => message.success('Link Copied')}
                            >
                              <a>{shortUrl}</a>
                            </CopyToClipboard>
                          </Tooltip>
                        </h1>
                      </Col>
                    </Row>
                  )}
                  {action && <div className={styles.action}>{action}</div>}
                </div>
                <div className={styles.row}>
                  {content && <div className={styles.content}>{content}</div>}
                  {extraContent && <div className={styles.extraContent}>{extraContent}</div>}
                </div>
              </div>
            </div>
            {tabList && tabList.length ? (
              <Tabs
                className={styles.tabs}
                {...activeKeyProps}
                onChange={this.onChange}
                tabBarExtraContent={tabBarExtraContent}
              >
                {tabList.map(item => (
                  <TabPane tab={item.tab} key={item.key} />
                ))}
              </Tabs>
            ) : null}
          </Skeleton>
        </div>
      </div>
    );
  }
}
