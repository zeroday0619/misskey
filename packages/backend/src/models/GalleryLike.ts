/*
 * SPDX-FileCopyrightText: syuilo and other misskey contributors
 * SPDX-License-Identifier: AGPL-3.0-only
 */

import { PrimaryColumn, Entity, Index, JoinColumn, Column, ManyToOne } from 'typeorm';
import { id } from './util/id.js';
import { MiUser } from './User.js';
import { MiGalleryPost } from './GalleryPost.js';

@Entity('gallery_like')
@Index(['userId', 'postId'], { unique: true })
export class MiGalleryLike {
	@PrimaryColumn(id())
	public id: string;

	@Index()
	@Column('timestamp with time zone', {
		comment: 'The created date of the GalleryLike.',
		default: () => 'CURRENT_TIMESTAMP',
	})
	public createdAt: Date;

	@Index()
	@Column(id())
	public userId: MiUser['id'];

	@ManyToOne(type => MiUser, {
		onDelete: 'CASCADE',
	})
	@JoinColumn()
	public user: MiUser | null;

	@Column(id())
	public postId: MiGalleryPost['id'];

	@ManyToOne(type => MiGalleryPost, {
		onDelete: 'CASCADE',
	})
	@JoinColumn()
	public post: MiGalleryPost | null;
}
