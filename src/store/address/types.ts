import { AddressListAddress, AddressEditInfo } from 'vant'

export interface AddressState {
  addressInfo: AddressEditInfo
  addressList: AddressListAddress[]
  selectAddress: AddressListAddress
}
