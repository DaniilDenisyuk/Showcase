import { merge } from 'lodash-es'
import { navRepo } from '../../navigation/repository'
import LayoutManager from '../components/LayoutManager'

merge(navRepo.config, { layout: LayoutManager })
