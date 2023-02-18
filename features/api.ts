import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from '@/lib/baseQuery';
import {
	NotificationsType,
	SingleExhausterType,
	SinterMachinesDataType,
} from '@/types';

export const api = createApi({
	baseQuery,
	endpoints: build => ({
		getData: build.query<SinterMachinesDataType, void>({
			query: () => '/api/general',
			async onCacheEntryAdded(
				arg,
				{ updateCachedData, cacheDataLoaded, cacheEntryRemoved }
			) {
				const ws = new WebSocket('ws://176.113.82.20/notify_general');

				try {
					await cacheDataLoaded;

					const listener = (event: MessageEvent) => {
						const data = JSON.parse(event.data);

						updateCachedData(() => data);
					};
					ws.addEventListener('message', listener);
				} catch (e) {
					console.log('error', e);
				}
				await cacheEntryRemoved;
				ws.close();
			},
		}),
		getSingleData: build.query<SingleExhausterType, { index: number }>({
			query: ({ index }) => `/api/exhauster/${index}`,
			async onCacheEntryAdded(
				arg,
				{ updateCachedData, cacheDataLoaded, cacheEntryRemoved }
			) {
				const ws = new WebSocket(
					`ws://176.113.82.20/notify_exhauster/${arg.index}`
				);

				console.log(ws);

				try {
					await cacheDataLoaded;

					const listener = (event: MessageEvent) => {
						const data = JSON.parse(event.data);
						updateCachedData(() => data);
					};
					ws.addEventListener('message', listener);
				} catch (e) {
					console.log('error', e);
				}
				await cacheEntryRemoved;
				ws.close();
			},
		}),

		getNotifications: build.query<NotificationsType, void>({
			query: () => '/api/notify_events',
			async onCacheEntryAdded(
				arg,
				{ updateCachedData, cacheDataLoaded, cacheEntryRemoved }
			) {
				const ws = new WebSocket('ws://176.113.82.20/notify_events');

				try {
					await cacheDataLoaded;

					const listener = (event: MessageEvent) => {
						const data = JSON.parse(event.data);

						updateCachedData(() => data);
					};
					ws.addEventListener('message', listener);
				} catch (e) {
					console.log('error', e);
				}
				await cacheEntryRemoved;
				ws.close();
			},
		}),
		getDataByDate: build.query<any, { from: string; to: string; exId: number }>(
			{
				query: ({ from, to, exId }) => {
					return `/api/by_date?date_from=${from}&date_to=${to}&exhauster_index=${exId}`;
				},
			}
		),
	}),
});

export const {
	useGetDataQuery,
	useGetSingleDataQuery,
	useGetDataByDateQuery,
	useGetNotificationsQuery,
} = api;
