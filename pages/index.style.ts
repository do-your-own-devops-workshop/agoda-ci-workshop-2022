import css from 'styled-jsx/css';

export default css.global`
.container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.page-header {
  width: 100%;
  min-height: 60px;
}

.page-header-section {
  display: flex;
  padding: 0px 16px;
  background-color: rgb(255, 255, 255);
  color: rgb(42, 42, 46);
  min-height: 60px;
  -moz-box-align: center;
  align-items: center;
}

.page-header-nav {
  padding: 0px 16px;
  flex: 0 0 auto;
  display: inline-block;
}

.page-header-logo {
  display: inline-block;
  vertical-align: middle;
}

.page-header-left-nav {
  padding: 0px 16px;
  flex: 0 0 auto;
  display: inline-block;
  vertical-align: middle;
  margin-left: 12px;
}

.page-header-navbtn {
  padding-left: 28px;
  padding-right: 0px;
  margin-left: 8px;
  margin-right: 4px;
  display: inline-block;
  position: relative;
  margin: 0px !important;
}

.page-header-navbtn-text {
  font-family: kite-mallory, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  line-height: 17px;
  margin: 0px;
  text-decoration: none;
  font-weight: 500;
  color: rgb(42, 42, 46);
  line-height: 56px;
}

.topbar {
  width: 100%;
  min-height: 70px;
  margin-bottom: 5px;
  background-color: #20274d;
}

.searchbox-container {
  margin: 0 auto;
  width: 825px;
  max-height: 70px;
  padding: 11px 0;
}

.input-with-icon {
  margin-left: 0;
  margin-right: 5px;
  height: 48px;
  padding: 0 5px;
  width: calc(100% - 135px);
  border-radius: 6px;
  background-color: #fff;
  box-shadow: 0 4px 10px 0 rgba(0,0,0,.07);
  cursor: pointer;
  display: inline-block;
  position: relative;
  vertical-align: top;
}

.input-with-icon > .input-with-icon-inner {
  position: relative;
  cursor: pointer;
}

.input-with-icon > .input-with-icon-inner > .input-with-icon-icon {
  color: #333;
  margin-bottom: 0;
  padding: 13px;
  display: inline-block;
  vertical-align: middle;
}

.input-with-icon > .input-with-icon-inner > .input-with-icon-textinput {
  vertical-align: middle;
  display: inline-block;
  width: calc(100% - 60px);
}

.input-with-icon > .input-with-icon-inner > .input-with-icon-textinput > input {
  background-color: #fff;
  color: #2a2a2e;
  outline-color: #75a8f9;
  font-weight: 400;
  line-height: 1.25;
  margin: 0;
  padding: 0;
  width: 100%;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  text-overflow: ellipsis;
}

.search-btn {
  height: 48px;
  padding: 10px 0;
  background-color: #5392f9;
  box-shadow: 0 4px 10px 0 rgba(0,0,0,.15);
  color: #fff;
  border: none;
  border-radius: 3px;
  font-size: 14px;
  overflow: hidden;
  position: relative;
  text-transform: uppercase;
  width: 130px;
}

main {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 825px;
}

.property-card {
  margin: 15px 0;
  cursor: pointer;
  border-bottom: none;
  width: 100%;
}

.property-card > .property-card-container {
  border: 4px solid;
  border-color: #5392f9;
  border-radius: 12px;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,.12);
  min-height: 220px;
  transition: box-shadow .2s ease-in-out,-webkit-box-shadow .2s ease-in-out;
}

.property-card > .property-card-container:hover {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,.3);
}

.property-card .property-card-body {
  border-color: #dddfe2;
  box-sizing: border-box;
  display: flex;
  flex-flow: row wrap;
  width: 100%;
}

.property-card .property-card-body > .property-card-image {
  position: relative;
  box-sizing: border-box;
  margin: 0px;
  display: block;
  flex-basis: 33.3333%;
  -moz-box-flex: 0;
  flex-grow: 0;
  width: 33.3333%;
  border-radius: 8px 0 0 0;
  overflow: hidden;
}

.property-card .property-card-body > .property-card-image > img {
  object-fit: 'cover';
}

.property-card .property-card-body > .property-card-info {
  border-right-style: solid;
  border-right-width: 1px;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-box-pack: justify;
  flex-direction: column;
  justify-content: space-between;
  border-color: #dddfe2;
  box-sizing: border-box;
  margin: 0px;
  display: block;
  flex-basis: 41.6667%;
  flex-grow: 0;
  width: 41.6667%;
  padding: 8px 12px 16px 12px;
}

.property-card .property-card-body > .property-card-info > .property-card-info-name {
  font-weight: 550;
  color: rgb(36, 38, 44);
  fill: rgb(36, 38, 44);
  display: inline;
  font-size: 20px;
  line-height: 24px;
  margin: 0px;
}

.property-card .property-card-body > .property-card-info > .property-card-info-subtitle {
  margin-top: 4px;
}

.property-card .property-card-body > .property-card-info > .property-card-info-subtitle > .property-card-info-subtitle-stars {
  display: inline-block;
}

.property-card .property-card-body > .property-card-info > .property-card-info-subtitle > .property-card-info-subtitle-stars > svg {
  overflow: hidden;
  fill: rgb(255, 86, 125);
  min-width: 14px;
  min-height: 14px;
  max-width: 14px;
  max-height: 14px;
  width: 14px;
}

.property-card .property-card-body > .property-card-pricing {
  text-align: right;
  margin: 0px;
  display: flex;
  flex-basis: 25%;
  flex-grow: 0;
  width: 25%;
  padding: 8px;
  flex-direction: column;
  justify-content: flex-start;
  gap: 8px;
  align-items: flex-end;
}

.property-card .property-card-body > .property-card-pricing > .property-card-pricing-rating {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: nowrap;
}

.property-card .property-card-body > .property-card-pricing > .property-card-pricing-rating > .property-card-pricing-rating-left {
  padding: 8px 0px 0px;
  padding: 0px;
  flex-direction: column;
  align-self: flex-start;
  display: flex;
}

.property-card .property-card-body > .property-card-pricing > .property-card-pricing-rating > .property-card-pricing-rating-left > span {
  display: 'block',
}

.property-card .property-card-body > .property-card-pricing > .property-card-pricing-rating > .property-card-pricing-rating-right {
  margin-right: 0px;
  margin-left: 8px;
  width: 32px;
  height: 32px;
  position: relative;
  order: 1;
  display: flex;
}

.property-card .property-card-body > .property-card-pricing > .property-card-pricing-rating > .property-card-pricing-rating-right > svg {
  font-size: 12px;
  width: inherit;
  height: inherit;
  position: absolute;
  top: 0px;
  left: 0px;
}

.property-card .property-card-body > .property-card-pricing > .property-card-pricing-rating > .property-card-pricing-rating-right > .property-card-pricing-rating-right-score {
  width: inherit;
  height: inherit;
  position: relative;
  justify-content: center;
  align-items: center;
  display: inherit;
  color: rgb(255, 255, 255);
  font-size: 14px;
  line-height: 14px;
  font-weight: 400;
  margin: 0 -2px;
}

.property-card .property-card-body > .property-card-pricing > .property-card-pricing-redbadge {
  padding: 4px 8px;
  border-radius: 2px;
  background-color: rgb(249, 216, 216);
  color: rgb(180, 36, 36);
  justify-content: center;
  align-items: center;
  display: flex;
  text-align: center;
  flex-wrap: nowrap;
}

.property-card .property-card-body > .property-card-pricing > .property-card-pricing-redbadge > span {
  font-size: 12px;
  line-height: 12px;
  font-weight: 500;
  margin: 0px;
}

.property-card .property-card-body > .property-card-pricing > .property-card-pricing-crossedoutprice:before {
  transform: rotate(-10deg);
  border-top: 2px solid;
  border-color: #e12d2d;
  content: "";
  position: absolute;
  right: 0;
  top: 50%;
  width: 100%;
}

.property-card .property-card-body > .property-card-pricing > .property-card-pricing-crossedoutprice {
  color: #737373;
  display: inline-block;
  font-size: 22px;
  font-weight: 500;
  line-height: 22px;
  position: relative;
}

.property-card .property-card-body > .property-card-pricing > .property-card-pricing-price {
  color: #737373;
  display: inline-block;
  font-size: 22px;
  font-weight: 500;
  line-height: 22px;
  position: relative;
}

.property-card .property-card-body > .property-card-pricing > .property-card-pricing-price > .property-card-pricing-price-currency {
  font-weight: 400;
}

.property-card .property-card-body > .property-card-pricing > .property-card-pricing-price > .property-card-pricing-price-price {
  color: rgb(225, 45, 45);
}

.property-card .property-card-body > .property-card-pricing > .property-card-pricing-freecancellation {
  color: rgb(40, 135, 28);
  font-size: 12px;
  line-height: 16px;
  font-weight: 500;
}

.property-card .property-card-body > .property-card-pricing > .property-card-pricing-selectroom-btn {
  position: relative;
  border: medium none;
  user-select: none;
  padding: 12px;
  border-radius: 4px;
  background-color: rgb(62, 108, 234);
  color: rgb(255, 255, 255);
  align-items: center;
  display: flex;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 3px 1px;
  transition: all 0.15s ease-in-out 0s;
  margin-top: 8px;
  margin-bottom: 8px;
}

.property-card .property-card-body > .property-card-pricing > .property-card-pricing-selectroom-btn:hover {
  background-color: rgb(120, 152, 240);
  border-color: rgb(120, 152, 240);
  color: rgb(255, 255, 255);
  transition: all 0.15s ease-in-out 0s;
}

.property-card .property-card-body > .property-card-pricing > .property-card-pricing-selectroom-btn > span {
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  margin-right: 8px;
  margin-left: 0px;
}

.property-card .property-card-body > .property-card-pricing > .property-card-pricing-selectroom-btn > svg {
  fill: rgb(255, 255, 255);
}
`