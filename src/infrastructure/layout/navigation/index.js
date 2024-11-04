import { merge } from 'lodash-es'
import { navRepo } from '../../navigation/repository'
import DefaultLayoutManager from '../components/DefaultLayoutManager'

merge(navRepo.config, { layout: DefaultLayoutManager })
