export interface BearingType {
	index: number;
	is_temp_warning: boolean;
	is_temp_alarm: boolean;
	is_vibration_warning: boolean | null;
	is_vibration_alarm: boolean | null;
	vibration_status: WarningType;
	temp_status: WarningType;
}

export interface ExhausterType {
	index: number;
	title: string;
	is_work: boolean;
	rotor_title: string;
	date_last_change: string;
	days_last_change: number;
	days_forecast: number;
	forecast_warning: boolean;
	forecast_alarm: boolean;
	bearings: BearingType[];
	oil_level: number;
	oil_pressure: number;
}

export interface SinterMachineType {
	exhausters: ExhausterType[];
}

export interface SinterMachinesDataType {
	sinter_machines: SinterMachineType[];
	updated_at: string;
}

type WarningType = 'default' | 'alarm' | 'warning';

export interface SingleExhausterType {
	updated_at: string;
	title: string;
	is_work: boolean;
	rotor_title: string;
	bearings: {
		index: number;
		temperature: number;
		temp_status: WarningType;
		axial_vibration: number | null;
		axial_vibration_status: WarningType;
		horizontal_vibration: number | null;
		hor_vibration_status: WarningType;
		vertical_vibration: number | null;
		vert_vibration_status: WarningType;
	}[];
	oil_level: number;
	oil_level_status: string;
	oil_pressure: number;
	oil_pressure_status: string;
	rotor_current: number;
	rotor_current_status: string;
	stator_current: number;
	stator_current_status: string;
	rotor_voltage: number;
	stator_voltage: number;
	oil_temp_before: number;
	oil_temp_before_status: string;
	oil_temp_after: number;
	oil_temp_after_status: string;
	water_temp_before: number;
	water_temp_before_status: string;
	water_temp_after: number;
	water_temp_after_status: string;
	gas_valve_open: boolean;
	gas_valve_closed: boolean;
	gas_valve_position: number;
	gas_temp_before: number;
	gas_underpressure_before: number;
}

interface DiagramElement {
	moment: string;
	bearings_data: {
		temp: number;
		axial_vibration: number;
		horizontal_vibration: number;
		vertical_vibration: number;
	}[];
	oil_data: {
		oil_level: number;
		oil_pressure: number;
	};
	electricity_data: {
		rotor_current: number;
		rotor_voltage: number;
		stator_current: number;
		stator_voltage: number;
	};
	gas_manifold_data: {
		temperature_before: number;
		underpressure_before: number;
	};
	chiller_data: {
		oil_temp_before: number;
		oil_temp_after: number;
		water_temp_before: number;
		water_temp_after: number;
	};
}

export type DiagramData = DiagramElement[];

export interface NotificationsType {
	events: {
		timestamp: number;
		exhauster_index: number;
		exhauster_title: string;
		bearing_index: number;
	}[];
}
