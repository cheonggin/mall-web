import { addData, deleteData, getData, updateData } from '@/service'
import { localCache } from '@/utils/cache'
import { defineStore } from 'pinia'
import { Toast, AddressEditInfo, AddressListAddress } from 'vant'
import { AddressState } from './types'

const useAddressStore = defineStore('address', {
  state: (): AddressState => {
    return {
      addressInfo: {} as AddressEditInfo,
      addressList: [],
      selectAddress: {} as AddressListAddress
    }
  },
  getters: {
    defualtAddress: state => {
      return state.addressList.find(item => item.isDefault === true)
    }
  },
  actions: {
    async addDataAction (addressInfo: any) {
      const { code } = await addData('/page/address', addressInfo)

      if (code === 0) Toast.success('添加成功')
    },

    async getDataAction () {
      const { data } = await getData('/page/address')

      this.addressList = data.map((item: any) => {
        return {
          id: item.id,
          name: item.name,
          tel: item.tel,
          address: `${item.province}${item.city}${item.county}${item.addressDetail}`,
          isDefault: item.isDefault
        }
      })
    },

    async getDataByIdAction (id: number) {
      const { data } = await getData(`/page/address/${id}`)
      this.addressInfo = data
    },

    async updateDataAction (id: number, content: any) {
      const { code } = await updateData(`/page/address/${id}`, content)
      if (code === 0) Toast.success('修改成功')
    },

    async deleteDataAction (id: number) {
      const { code } = await deleteData(`/page/address/${id}`)
      if (code === 0) Toast.success('删除成功')
    },

    loadLocalData () {
      const select_address = localCache.getCache('select_address')

      if (select_address) {
        this.selectAddress = select_address
      }
    }
  }
})

export { useAddressStore }
