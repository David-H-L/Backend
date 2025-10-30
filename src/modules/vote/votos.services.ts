import Vote from "./models/vote.model";
import { Op } from "sequelize";

import { ICreateVote } from "./dtos/CreateVote.dto";
import { IVoteFilter, IVoto } from "./interfaces/votes.interface";
import { IServiceResponse } from "../../type";
import { sequelize } from "../../config/database.config"; // en caso de utilizar consulas complejas

export const createVotoService = async (payload: ICreateVote): Promise<IServiceResponse<IVoto>> => {
    try {
        const voto = await Vote.create(payload);
        return {
            message: 'Voto creado correctamente',
            ok: true,
            data: voto
        }
    
    } catch (error) {
        return {
            message: 'Error al crear el voto',
            ok: false,
        }
    }
}

export const getVotosService = async (filter: IVoteFilter): Promise<IServiceResponse<Vote[]>> => {
    try {
        const whereConditions: any = {};

        if(filter.name) {
            whereConditions.name = {
                [Op.iLike]: `%${filter.name}%`
            };
        }

        if(filter.status !== undefined) {
            whereConditions.finished = filter.status;
        }

        //aplicando filtros seguros
        if(filter.startAt || filter.endsAt) {
            const dateFilter: any = {};

            if(filter.startAt) {
                dateFilter[Op.gte] = filter.startAt;
            }

            if(filter.endsAt) {
                dateFilter[Op.lte] = filter.endsAt;
            }

            whereConditions.date = dateFilter;
        }

        const votes = await Vote.findAll({
            where: whereConditions,
            order: [['createdAt', 'DESC']],
            limit: 100
        });


        return {
            message: 'Votos obtenidos correctamente',
            ok: true,
            data: votes
        }
    } catch (error) {
        console.error('Error en getVotosService:', error)
        return {
        message: 'Error al obtener los votos',
        ok: false,
        }
    }
}

export const getVotoByIdService = async (id: number): Promise<IServiceResponse<IVoto>> => {
    try {
        const vote = await Vote.findByPk(id);
        if(!vote) {
            return {
                message: 'Voto no encontrado',
                ok: false,
            }
        }

        return {
            message: 'Voto obtenido correctamente',
            ok: true,
            data: vote
        }
    } catch (error) {
        console.error(error)
        return {
        message: 'Error al obtener el voto',
        ok: false,
        }
    }
}



export const updateVotoService = async (id: number, payload: ICreateVote): Promise<IServiceResponse<number>> => {
    try {
        const response = await Vote.update(payload, {
            where: {
                id
            }
        });

        if(response[0] === 0) {
            return {
                message: 'Voto no encontrado',
                ok: false,
            }
        }

        return {
            message: 'Voto actualizado correctamente',
            ok: true,
            data: response[0]
        }
    } catch (error) {
        console.error(error)
        return {
        message: 'Error al actualizar el voto',
        ok: false,
        }
    }
}

export const deleteVotoService = async (id: number): Promise<IServiceResponse<number>> => {
    try {
        const response = await Vote.destroy({
            where: {
                id
            }
        });

        if(response === 0) {
            return {
                message: 'Voto no encontrado',
                ok: false
            }       
         }

        return {
            message: 'Voto eliminado correctamente',
            ok: true,
            data: response
        }

    } catch (error) {
        console.error(error)
        return {
        message: 'Error al eliminar el voto',
        ok: false,
        }
    }
}