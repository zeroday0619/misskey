/*
 * SPDX-FileCopyrightText: syuilo and other misskey contributors
 * SPDX-License-Identifier: AGPL-3.0-only
 */

export class CreatedAtDefault1700415938358 {
    name = 'CreatedAtDefault1700415938358'

    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "avatar_decoration" ADD "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
        await queryRunner.query(`COMMENT ON COLUMN "avatar_decoration"."createdAt" IS 'The created date of the AvatarDecoration.'`);
        await queryRunner.query(`COMMENT ON COLUMN "abuse_report_resolver"."createdAt" IS 'The created date of the AbuseReportResolver.'`);
        await queryRunner.query(`ALTER TABLE "abuse_report_resolver" ALTER COLUMN "createdAt" SET DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "drive_folder" ALTER COLUMN "createdAt" SET DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "drive_file" ALTER COLUMN "createdAt" SET DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "createdAt" SET DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "abuse_user_report" ALTER COLUMN "createdAt" SET DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "app" ALTER COLUMN "createdAt" SET DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "access_token" ALTER COLUMN "createdAt" SET DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "ad" ALTER COLUMN "createdAt" SET DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "announcement" ALTER COLUMN "createdAt" SET DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "announcement_read" ALTER COLUMN "createdAt" SET DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "user_list" ALTER COLUMN "createdAt" SET DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "antenna" ALTER COLUMN "createdAt" SET DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "auth_session" ALTER COLUMN "createdAt" SET DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "blocking" ALTER COLUMN "createdAt" SET DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "channel" ALTER COLUMN "createdAt" SET DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "channel_following" ALTER COLUMN "createdAt" SET DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "channel_favorite" ALTER COLUMN "createdAt" SET DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "clip" ALTER COLUMN "createdAt" SET DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "note" ALTER COLUMN "createdAt" SET DEFAULT now()`);
        await queryRunner.query(`COMMENT ON COLUMN "clip_favorite"."createdAt" IS 'The created date of the ClipFavorite.'`);
        await queryRunner.query(`ALTER TABLE "clip_favorite" ALTER COLUMN "createdAt" SET DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "following" ALTER COLUMN "createdAt" SET DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "follow_request" ALTER COLUMN "createdAt" SET DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "gallery_post" ALTER COLUMN "createdAt" SET DEFAULT now()`);
        await queryRunner.query(`COMMENT ON COLUMN "gallery_like"."createdAt" IS 'The created date of the GalleryLike.'`);
        await queryRunner.query(`ALTER TABLE "gallery_like" ALTER COLUMN "createdAt" SET DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "meta" ALTER COLUMN "preservedUsernames" SET DEFAULT '{ "admin", "administrator", "root", "system", "maintainer", "host", "mod", "moderator", "owner", "superuser", "staff", "auth", "i", "me", "everyone", "all", "mention", "mentions", "example", "user", "users", "account", "accounts", "official", "help", "helps", "support", "supports", "info", "information", "informations", "announce", "announces", "announcement", "announcements", "notice", "notification", "notifications", "dev", "developer", "developers", "tech", "misskey" }'`);
        await queryRunner.query(`ALTER TABLE "moderation_log" ALTER COLUMN "createdAt" SET DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "muting" ALTER COLUMN "createdAt" SET DEFAULT now()`);
        await queryRunner.query(`COMMENT ON COLUMN "renote_muting"."createdAt" IS 'The created date of the RenoteMuting.'`);
        await queryRunner.query(`ALTER TABLE "renote_muting" ALTER COLUMN "createdAt" SET DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "note_favorite" ALTER COLUMN "createdAt" SET DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "note_reaction" ALTER COLUMN "createdAt" SET DEFAULT now()`);
        await queryRunner.query(`COMMENT ON COLUMN "note_thread_muting"."createdAt" IS 'The created date of the NoteThreadMuting.'`);
        await queryRunner.query(`ALTER TABLE "note_thread_muting" ALTER COLUMN "createdAt" SET DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "page" ALTER COLUMN "createdAt" SET DEFAULT now()`);
        await queryRunner.query(`COMMENT ON COLUMN "page_like"."createdAt" IS 'The created date of the PageLike.'`);
        await queryRunner.query(`ALTER TABLE "page_like" ALTER COLUMN "createdAt" SET DEFAULT now()`);
        await queryRunner.query(`COMMENT ON COLUMN "password_reset_request"."createdAt" IS 'The created date of the PasswordResetRequest.'`);
        await queryRunner.query(`ALTER TABLE "password_reset_request" ALTER COLUMN "createdAt" SET DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "poll_vote" ALTER COLUMN "createdAt" SET DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "promo_read" ALTER COLUMN "createdAt" SET DEFAULT now()`);
        await queryRunner.query(`COMMENT ON COLUMN "registration_ticket"."createdAt" IS 'The created date of the RegistrationTicket.'`);
        await queryRunner.query(`ALTER TABLE "registration_ticket" ALTER COLUMN "createdAt" SET DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "registry_item" ALTER COLUMN "createdAt" SET DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "signin" ALTER COLUMN "createdAt" SET DEFAULT now()`);
        await queryRunner.query(`COMMENT ON COLUMN "sw_subscription"."createdAt" IS 'The created date of the SwSubscriptipnpon.'`);
        await queryRunner.query(`ALTER TABLE "sw_subscription" ALTER COLUMN "createdAt" SET DEFAULT now()`);
        await queryRunner.query(`COMMENT ON COLUMN "used_username"."createdAt" IS 'The created date of the UsedUsername.'`);
        await queryRunner.query(`ALTER TABLE "used_username" ALTER COLUMN "createdAt" SET DEFAULT now()`);
        await queryRunner.query(`COMMENT ON COLUMN "user_ip"."createdAt" IS 'The created date of the UserIp.'`);
        await queryRunner.query(`ALTER TABLE "user_ip" ALTER COLUMN "createdAt" SET DEFAULT now()`);
        await queryRunner.query(`COMMENT ON COLUMN "user_list_favorite"."createdAt" IS 'The created date of the UserListFavorite.'`);
        await queryRunner.query(`ALTER TABLE "user_list_favorite" ALTER COLUMN "createdAt" SET DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "user_list_membership" ALTER COLUMN "createdAt" SET DEFAULT now()`);
        await queryRunner.query(`COMMENT ON COLUMN "user_note_pining"."createdAt" IS 'The created date of the UserNotePining.'`);
        await queryRunner.query(`ALTER TABLE "user_note_pining" ALTER COLUMN "createdAt" SET DEFAULT now()`);
        await queryRunner.query(`COMMENT ON COLUMN "user_pending"."createdAt" IS 'The created date of the UserPending.'`);
        await queryRunner.query(`ALTER TABLE "user_pending" ALTER COLUMN "createdAt" SET DEFAULT now()`);
        await queryRunner.query(`COMMENT ON COLUMN "webhook"."createdAt" IS 'The created date of the Webhook.'`);
        await queryRunner.query(`ALTER TABLE "webhook" ALTER COLUMN "createdAt" SET DEFAULT now()`);
        await queryRunner.query(`COMMENT ON COLUMN "retention_aggregation"."createdAt" IS 'The created date of the GalleryPost.'`);
        await queryRunner.query(`ALTER TABLE "retention_aggregation" ALTER COLUMN "createdAt" SET DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "role" ALTER COLUMN "createdAt" SET DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "role_assignment" ALTER COLUMN "createdAt" SET DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "flash" ALTER COLUMN "createdAt" SET DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "flash" ALTER COLUMN "visibility" SET NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "flash_like"."createdAt" IS 'The created date of the FlashLike.'`);
        await queryRunner.query(`ALTER TABLE "flash_like" ALTER COLUMN "createdAt" SET DEFAULT now()`);
        await queryRunner.query(`CREATE INDEX "IDX_f9b40730606162a441c7acb3e5" ON "access_token" ("createdAt") `);
        await queryRunner.query(`CREATE INDEX "IDX_cbca0122587e5a757ea0e584f0" ON "announcement_read" ("createdAt") `);
        await queryRunner.query(`CREATE INDEX "IDX_1383c050b99ba7deb995207afe" ON "user_list" ("createdAt") `);
        await queryRunner.query(`CREATE INDEX "IDX_9425d976c9cf6d47d2b9956344" ON "antenna" ("createdAt") `);
        await queryRunner.query(`CREATE INDEX "IDX_a3aca00bb7f8d79408edfefe67" ON "avatar_decoration" ("createdAt") `);
        await queryRunner.query(`CREATE INDEX "IDX_407e3e07747e5cebb916e77914" ON "auth_session" ("createdAt") `);
        await queryRunner.query(`CREATE INDEX "IDX_823073a0f1f5d44ef83917e0c4" ON "clip" ("createdAt") `);
        await queryRunner.query(`CREATE INDEX "IDX_e7c0567f5261063592f022e9b5" ON "note" ("createdAt") `);
        await queryRunner.query(`CREATE INDEX "IDX_94af6cc88a484caf0cd53bfec9" ON "clip_favorite" ("createdAt") `);
        await queryRunner.query(`CREATE INDEX "IDX_9a20428737dfc7c515fc31c9bc" ON "follow_request" ("createdAt") `);
        await queryRunner.query(`CREATE INDEX "IDX_3712d1129515e88dedc7c0ca9b" ON "gallery_like" ("createdAt") `);
        await queryRunner.query(`CREATE INDEX "IDX_1c32fad73f120e11702982f713" ON "moderation_log" ("createdAt") `);
        await queryRunner.query(`CREATE INDEX "IDX_b7a97c1435dfa03ab42ab7ec92" ON "note_favorite" ("createdAt") `);
        await queryRunner.query(`CREATE INDEX "IDX_01f4581f114e0ebd2bbb876f0b" ON "note_reaction" ("createdAt") `);
        await queryRunner.query(`CREATE INDEX "IDX_51fe96e68f335de120a5f8974b" ON "note_thread_muting" ("createdAt") `);
        await queryRunner.query(`CREATE INDEX "IDX_b72859eb6173fd2e176aad3fbc" ON "page_like" ("createdAt") `);
        await queryRunner.query(`CREATE INDEX "IDX_0123b5cc155383f3d380170774" ON "password_reset_request" ("createdAt") `);
        await queryRunner.query(`CREATE INDEX "IDX_65a0babf63cec88aaa804332a0" ON "promo_read" ("createdAt") `);
        await queryRunner.query(`CREATE INDEX "IDX_0bf1bd10114284dc984d900c8b" ON "registration_ticket" ("createdAt") `);
        await queryRunner.query(`CREATE INDEX "IDX_0ff7393a15d37079be4e1f2bd5" ON "registry_item" ("createdAt") `);
        await queryRunner.query(`CREATE INDEX "IDX_68e9b8637a5b186f242d81e41a" ON "signin" ("createdAt") `);
        await queryRunner.query(`CREATE INDEX "IDX_8781b31c9b1e5c6c0b1cf904c0" ON "sw_subscription" ("createdAt") `);
        await queryRunner.query(`CREATE INDEX "IDX_4ac8a879384f3fc210bbaa21bc" ON "used_username" ("createdAt") `);
        await queryRunner.query(`CREATE INDEX "IDX_e15e78ed889553e314336e4952" ON "user_ip" ("createdAt") `);
        await queryRunner.query(`CREATE INDEX "IDX_970ffee983708c114a0c289903" ON "user_list_favorite" ("createdAt") `);
        await queryRunner.query(`CREATE INDEX "IDX_d6d398ea7c0d187aa9a91c4ad0" ON "user_list_membership" ("createdAt") `);
        await queryRunner.query(`CREATE INDEX "IDX_61347f72791a48bfaa9244eb05" ON "user_note_pining" ("createdAt") `);
        await queryRunner.query(`CREATE INDEX "IDX_e9181436b1294069148b5ba491" ON "user_pending" ("createdAt") `);
        await queryRunner.query(`CREATE INDEX "IDX_7ad27f46c9449fe9d6fbb4c79c" ON "webhook" ("createdAt") `);
        await queryRunner.query(`CREATE INDEX "IDX_3c39bd046f5e69d37f0e4fe768" ON "role" ("createdAt") `);
        await queryRunner.query(`CREATE INDEX "IDX_fe3eb6be723a95c6b7ce539a4f" ON "role_assignment" ("createdAt") `);
        await queryRunner.query(`CREATE INDEX "IDX_89523d5c47dc3fcc0bd6793f18" ON "flash_like" ("createdAt") `);
        await queryRunner.query(`ALTER TABLE "announcement" ADD CONSTRAINT "FK_fd25dfe3da37df1715f11ba6ec8" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "announcement" DROP CONSTRAINT "FK_fd25dfe3da37df1715f11ba6ec8"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_89523d5c47dc3fcc0bd6793f18"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_fe3eb6be723a95c6b7ce539a4f"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_3c39bd046f5e69d37f0e4fe768"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_7ad27f46c9449fe9d6fbb4c79c"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_e9181436b1294069148b5ba491"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_61347f72791a48bfaa9244eb05"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_d6d398ea7c0d187aa9a91c4ad0"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_970ffee983708c114a0c289903"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_e15e78ed889553e314336e4952"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_4ac8a879384f3fc210bbaa21bc"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_8781b31c9b1e5c6c0b1cf904c0"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_68e9b8637a5b186f242d81e41a"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_0ff7393a15d37079be4e1f2bd5"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_0bf1bd10114284dc984d900c8b"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_65a0babf63cec88aaa804332a0"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_0123b5cc155383f3d380170774"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_b72859eb6173fd2e176aad3fbc"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_51fe96e68f335de120a5f8974b"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_01f4581f114e0ebd2bbb876f0b"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_b7a97c1435dfa03ab42ab7ec92"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_1c32fad73f120e11702982f713"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_3712d1129515e88dedc7c0ca9b"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_9a20428737dfc7c515fc31c9bc"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_94af6cc88a484caf0cd53bfec9"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_e7c0567f5261063592f022e9b5"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_823073a0f1f5d44ef83917e0c4"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_407e3e07747e5cebb916e77914"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_a3aca00bb7f8d79408edfefe67"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_9425d976c9cf6d47d2b9956344"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_1383c050b99ba7deb995207afe"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_cbca0122587e5a757ea0e584f0"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_f9b40730606162a441c7acb3e5"`);
        await queryRunner.query(`ALTER TABLE "flash_like" ALTER COLUMN "createdAt" DROP DEFAULT`);
        await queryRunner.query(`COMMENT ON COLUMN "flash_like"."createdAt" IS NULL`);
        await queryRunner.query(`ALTER TABLE "flash" ALTER COLUMN "visibility" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "flash" ALTER COLUMN "createdAt" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "role_assignment" ALTER COLUMN "createdAt" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "role" ALTER COLUMN "createdAt" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "retention_aggregation" ALTER COLUMN "createdAt" DROP DEFAULT`);
        await queryRunner.query(`COMMENT ON COLUMN "retention_aggregation"."createdAt" IS 'The created date of the Note.'`);
        await queryRunner.query(`ALTER TABLE "webhook" ALTER COLUMN "createdAt" DROP DEFAULT`);
        await queryRunner.query(`COMMENT ON COLUMN "webhook"."createdAt" IS 'The created date of the Antenna.'`);
        await queryRunner.query(`ALTER TABLE "user_pending" ALTER COLUMN "createdAt" DROP DEFAULT`);
        await queryRunner.query(`COMMENT ON COLUMN "user_pending"."createdAt" IS NULL`);
        await queryRunner.query(`ALTER TABLE "user_note_pining" ALTER COLUMN "createdAt" DROP DEFAULT`);
        await queryRunner.query(`COMMENT ON COLUMN "user_note_pining"."createdAt" IS 'The created date of the UserNotePinings.'`);
        await queryRunner.query(`ALTER TABLE "user_list_membership" ALTER COLUMN "createdAt" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "user_list_favorite" ALTER COLUMN "createdAt" DROP DEFAULT`);
        await queryRunner.query(`COMMENT ON COLUMN "user_list_favorite"."createdAt" IS NULL`);
        await queryRunner.query(`ALTER TABLE "user_ip" ALTER COLUMN "createdAt" DROP DEFAULT`);
        await queryRunner.query(`COMMENT ON COLUMN "user_ip"."createdAt" IS NULL`);
        await queryRunner.query(`ALTER TABLE "used_username" ALTER COLUMN "createdAt" DROP DEFAULT`);
        await queryRunner.query(`COMMENT ON COLUMN "used_username"."createdAt" IS NULL`);
        await queryRunner.query(`ALTER TABLE "sw_subscription" ALTER COLUMN "createdAt" DROP DEFAULT`);
        await queryRunner.query(`COMMENT ON COLUMN "sw_subscription"."createdAt" IS NULL`);
        await queryRunner.query(`ALTER TABLE "signin" ALTER COLUMN "createdAt" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "registry_item" ALTER COLUMN "createdAt" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "registration_ticket" ALTER COLUMN "createdAt" DROP DEFAULT`);
        await queryRunner.query(`COMMENT ON COLUMN "registration_ticket"."createdAt" IS NULL`);
        await queryRunner.query(`ALTER TABLE "promo_read" ALTER COLUMN "createdAt" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "poll_vote" ALTER COLUMN "createdAt" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "password_reset_request" ALTER COLUMN "createdAt" DROP DEFAULT`);
        await queryRunner.query(`COMMENT ON COLUMN "password_reset_request"."createdAt" IS NULL`);
        await queryRunner.query(`ALTER TABLE "page_like" ALTER COLUMN "createdAt" DROP DEFAULT`);
        await queryRunner.query(`COMMENT ON COLUMN "page_like"."createdAt" IS NULL`);
        await queryRunner.query(`ALTER TABLE "page" ALTER COLUMN "createdAt" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "note_thread_muting" ALTER COLUMN "createdAt" DROP DEFAULT`);
        await queryRunner.query(`COMMENT ON COLUMN "note_thread_muting"."createdAt" IS NULL`);
        await queryRunner.query(`ALTER TABLE "note_reaction" ALTER COLUMN "createdAt" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "note_favorite" ALTER COLUMN "createdAt" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "renote_muting" ALTER COLUMN "createdAt" DROP DEFAULT`);
        await queryRunner.query(`COMMENT ON COLUMN "renote_muting"."createdAt" IS 'The created date of the Muting.'`);
        await queryRunner.query(`ALTER TABLE "muting" ALTER COLUMN "createdAt" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "moderation_log" ALTER COLUMN "createdAt" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "meta" ALTER COLUMN "preservedUsernames" SET DEFAULT '{admin,administrator,root,system,maintainer,host,mod,moderator,owner,superuser,staff,auth,i,me,everyone,all,mention,mentions,example,user,users,account,accounts,official,help,helps,support,supports,info,information,informations,announce,announces,announcement,announcements,notice,notification,notifications,dev,developer,developers,tech,misskey}'`);
        await queryRunner.query(`ALTER TABLE "gallery_like" ALTER COLUMN "createdAt" DROP DEFAULT`);
        await queryRunner.query(`COMMENT ON COLUMN "gallery_like"."createdAt" IS NULL`);
        await queryRunner.query(`ALTER TABLE "gallery_post" ALTER COLUMN "createdAt" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "follow_request" ALTER COLUMN "createdAt" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "following" ALTER COLUMN "createdAt" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "clip_favorite" ALTER COLUMN "createdAt" DROP DEFAULT`);
        await queryRunner.query(`COMMENT ON COLUMN "clip_favorite"."createdAt" IS NULL`);
        await queryRunner.query(`ALTER TABLE "note" ALTER COLUMN "createdAt" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "clip" ALTER COLUMN "createdAt" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "channel_favorite" ALTER COLUMN "createdAt" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "channel_following" ALTER COLUMN "createdAt" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "channel" ALTER COLUMN "createdAt" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "blocking" ALTER COLUMN "createdAt" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "auth_session" ALTER COLUMN "createdAt" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "antenna" ALTER COLUMN "createdAt" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "user_list" ALTER COLUMN "createdAt" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "announcement_read" ALTER COLUMN "createdAt" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "announcement" ALTER COLUMN "createdAt" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "ad" ALTER COLUMN "createdAt" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "access_token" ALTER COLUMN "createdAt" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "app" ALTER COLUMN "createdAt" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "abuse_user_report" ALTER COLUMN "createdAt" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "createdAt" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "drive_file" ALTER COLUMN "createdAt" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "drive_folder" ALTER COLUMN "createdAt" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "abuse_report_resolver" ALTER COLUMN "createdAt" DROP DEFAULT`);
        await queryRunner.query(`COMMENT ON COLUMN "abuse_report_resolver"."createdAt" IS 'The created date of AbuseReportResolver'`);
        await queryRunner.query(`COMMENT ON COLUMN "avatar_decoration"."createdAt" IS 'The created date of the AvatarDecoration.'`);
        await queryRunner.query(`ALTER TABLE "avatar_decoration" DROP COLUMN "createdAt"`);
    }
}
